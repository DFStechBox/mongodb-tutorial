"use strict";
import { ObjectId } from 'mongodb';
import { connectDB, closeDB } from './db.js';

async function run (): Promise<void> {
  const db = await connectDB();
  const tasks = db.collection('tasks');

  // create
  console.log(`\n------INSERT--------`);

  const insertResult = await tasks.insertOne({
    title: 'Learn nodejs drivers',
    completed: false,
    priority: 'high',
    tags: ['nodejs', 'mongodb'],
    createdAt: new Date(),
  });

  console.log("Insert ID:", insertResult.inserted)
  const newTaskId:number = insertResult.insertId

    
}

