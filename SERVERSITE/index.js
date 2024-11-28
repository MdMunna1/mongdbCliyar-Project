const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());
let port = process.env.PORT || 5000;
let use = [
  { id: 1, name: "munna" },
  { id: 1, name: "munna" },
  { id: 1, name: "munna" },
];

const uri =
  "mongodb+srv://dudca:4kEvCalkUasuueKP@cluster0.oxfol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    let collectionMD = client.db("userDB").collection("user"); // ! mongodb te userDB user name akta document khullam akhon ai khane detA RAKHBO

    app.get("/", (req, res) => {
      res.send(use);
    });
    app.get("/user", async (req, res) => {
      let user = collectionMD.find(); // * collectionMD ar moddhe theke find kore sob gula anlam
      let resuld = await user.toArray(); // * jegula anchi ogulake array banailam
      res.send(resuld); // aitar ata localhos a dekha jabe karon ata get methot
    });
    // ! id diye delet korte cai
    app.delete("/user/:id", async (req, res) => {
      let id = req.params.id;
      console.log("delet id ", id);
      let query = { _id: new ObjectId(id) };
      let result = await collectionMD.deleteOne(query);
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      let clieinDeta = req.body;
      //   console.log("new obj ", clieinDeta);// deta aste che cliet sitev theke
      let result = await collectionMD.insertOne(clieinDeta); // * collectionMD te je jayga korlam oi khane inserOne mane akta deta pacchi
      res.send(result); // * aita cliend ar then blok a jabe
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
