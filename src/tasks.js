"use strict";
import {ObjectId} from "mongodb";
import { connectDB } from "./db.js";

async function run() {
  const db = await connectDB();
  const tasksCollection = db.collection( "tasks" );
  
  // CREATE
  console.log( `\n-----INSERT` );
  
  const insertResult = await tasksCollection.insertOne( {
    title: "Learn Nodejs driver",
    completed: true,
    priority: "high",
    tags: ["nodejs", "mongodb"],
    createdAt: new Date(),
  } );

  console.log( "Inserted document ID:", insertResult.insertedId );
  const newTaskId = insertResult.insertedId;

  // READ
  console.log( `\n-----READ` );

  const allTasks = await tasks.find().toArray();
  console.log( `All tasks count:", ${allTasks.length}` );
  
  const incompleteTAsks = await tasks.find( { completed: false } ).limit( 2 ).toArray();
  console.log( `Incomplete tasks count:", ${incompleteTAsks.length}` );

  const oneTask = await tasks.findOne( { _id: newTaskID } );
  console.log( `Inserted task was:, ${oneTask}` );
  
}

