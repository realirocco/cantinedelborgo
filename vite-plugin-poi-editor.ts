import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { updatePoiSource } from './src/dev/poiFile';

const POIS_FILE = path.resolve(__dirname, 'src', 'data', 'pois.ts');

export default function poiEditorPlugin(): Plugin {
    return {
        name: 'vite-plugin-poi-editor',
        apply: 'serve',
        configureServer(server) {
            server.middlewares.use('/__dev/poi-editor/save', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.end(JSON.stringify({ error: 'Method not allowed' }));
                    return;
                }

                let body = '';
                req.on('data', chunk => {
                    body += chunk;
                });

                req.on('end', () => {
                    try {
                        const updates = JSON.parse(body);
                        if (!Array.isArray(updates)) {
                            res.statusCode = 400;
                            res.end(JSON.stringify({ error: 'Body must be an array' }));
                            return;
                        }

                        const source = fs.readFileSync(POIS_FILE, 'utf-8');
                        const result = updatePoiSource(source, updates);

                        // Scrittura atomica
                        const tmpFile = POIS_FILE + '.tmp';
                        fs.writeFileSync(tmpFile, result.source, 'utf-8');
                        fs.renameSync(tmpFile, POIS_FILE);

                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            success: true,
                            updated: result.updated,
                            missing: result.missing,
                            invalid: result.invalid,
                        }));
                    } catch (err: unknown) {
                        const message = err instanceof Error ? err.message : String(err);
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({ error: message }));
                    }
                });
            });
        },
    };
}