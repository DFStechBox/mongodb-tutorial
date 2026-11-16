import { MongoClient, Db } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();

let client;
let db;

export async function connectDB() {

  // Singleton pattern to ensure only one instance of MongoClient is created
  if (db) {
    return db;
  }

  client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  db = client.db('taskdb'); 

  console.log(`Connected to MongoDB database: ${db.databaseName}`)

  return db;
};

export async function closeDB() {
  if (client) {
    await client.close();
    console.log(`Disconnected from MongoDB ${db?.databaseName}`);
  }


}