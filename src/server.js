const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://mongodb:27017/it-landscape";
const client = new MongoClient(url);
const dbName = "it-landscape";

const app = express();

app.get("/", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  const document = await collection.findOne({ _id: 1 });

  if (!document) {
    res.send("No document found");
    return;
  }

  res.send(document.value);

  await client.close();
});

app.post("/", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // Check whether the document already exists
  const existingDocument = await collection.findOne({ _id: 1 });

  if (existingDocument) {
    await collection.updateOne(
      { _id: 1 },
      { $set: { value: `Updated document at ${new Date().toISOString()}` } }
    );
  } else {
    await collection.insertOne({
      _id: 1,
      value: `Hello IT Landscape! ${new Date().toISOString()}`,
    });
  }

  res.send(`Inserted document`);

  await client.close();
});

// Server starten op poort 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
