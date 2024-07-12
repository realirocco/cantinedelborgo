import { Client, Databases, Models } from 'appwrite';

export const client = new Client()           
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6682a48a000d4713ad45');

export const databases = new Databases(client);

export interface BusDoc extends Models.Document{
    lat: number,
    lng: number
}