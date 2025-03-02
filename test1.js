const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://wordlereact:UD24yWk7vuXPWKzC@cluster0.fyjq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function connectToDB() {
  const client = new MongoClient(uri);
  const cursor = client.db('sample_mflix').collection('users').find({name:"Ned Stark"});
  
  const results = await cursor;
  console.log(results)
  try {
    await client.connect();
    console.log('connected to db')
  } catch (e) {
      console.error(e);
  } finally {
    await client.close();
  }
}

connectToDB();