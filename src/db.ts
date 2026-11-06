import { MongoClient, Db } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();

let client: MongoClient | undefined;
let db: Db | undefined;

export async function connectDB(): Promise<Db> {

  // Singleton pattern to ensure only one instance of MongoClient is created
  if (db) {
    return db;
  }

  client = new MongoClient(process.env.MONGO_URI as string);
  await client.connect();
  db = client.db('taskdb'); // Replace 'taskdb' with your database name

  console.log(`Connected to MongoDB database: ${db.databaseName}`)

  return db;
};

export async function closeDB(): Promise<void> {
  if (client) {
    await client.close();
    console.log(`Donnected from MongoDB ${db?.databaseName}`);
  }


}