import {MongoClient, ServerApiVersion} from "mongodb";
// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:cdac@projectcluster.envnu1p.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster";
// const uri = "mongodb+srv://DBadmin:cdac@cluster0.6pg015n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export default client;
