
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://capedbaldy001:capedbaldy001@cluster0.lzevh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
