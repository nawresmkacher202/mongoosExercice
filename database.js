require('dotenv').config();// besh njib lparametre
const{ MongoClient}=require('mongodb');// le client de mongo db
const uri = process.env.MONGO_URI;//lparamétre lisamitha fel fichier
const client= new MongoClient(uri);// sna3et le client
async function connectToDatabase(){
    try {
        await client.connect()
        console.log("connect to mondodb!")
return client.db('users')
  }
  catch(error){
    console.log("error connecting to mongo db", error)
    process.exit(1)
  }
}     //sna3et une fonction     
module.exports={ connectToDatabase , client}; // besh nab3ath lfunction wel client      


//update:Mise a jour / delete , exemple d'aggregation ,insertMany
//nrives il ghodwa














































