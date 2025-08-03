require('dotenv').config({ path: '../.env' });

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://sawantshubham736:"+process.env.DB_KEY+"@namastenodejs.pp4h1jb.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...

  const data = {
    firstName: "chris",
    lastName: "bumstead",
    city: "US",
    phoneNumber: "9876543215",
  };

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  //   const filteredDocs = await collection.find({ firstName: "chris" }).toArray();
  //   console.log(
  //     "Found documents filtered by { firstName:chris } =>",
  //     filteredDocs
  //   );

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

  // const updateResult = await collection.updateOne({ firstName: "shubham" }, { $set: { firstName: "godlShub",lastName:"op" } });
  // console.log('Updated documents =>', updateResult);

  // const deleteResult = await collection.deleteMany({ firstName: "godlShub" });
  // console.log('Deleted documents =>', deleteResult);

//   const indexName = await collection.createIndex({ firstName:"akshay" });
//   console.log("index name =", indexName);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
