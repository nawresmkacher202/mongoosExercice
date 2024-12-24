const {connectToDatabase}=require('../config/database')
// Creer un utilisateur
 const adduser=async(req,res)=>{
try{
  const {firstName,lastName}=req.body;
  const db=await connectToDatabase();
  const result =await db.collection('students').insertOne({firstName,lastName})
  res.status(200).json({message:"user added successfully !", result }  )
}catch{
res.status(500).json({message:"error creating user"})
}
}
module.exports ={adduser}

//update user
const {connectToDatabase}=require('../config/database')
const updateUser = async (req, res) => {
    try {
    const {id} = req.params
    const { name, age} = req.body
    const db =await connectToDatabase()
    const result= await db.collection('students').updateOne(
    {_id: new require('mongodb').ObjectId(id) },
    {$set: { name, age } }
    )
    if (result.modifiedCount === 0) {
    return res.status(404).json({ error: 'User not found or no changes made' });
    }
    res.status(200).json({ message: 'User updated successfully' })}
    catch (error) {
    res.status(500).json({ error: 'Error updating user' })
    }}
  


// delete user
const {connectToDatabase}=require('../config/database')
const deleteUser= async (req, res) => {
    try {
    const {id} = req.params;
    const db= await connectToDatabase();
    const result= await db.collection('students').deleteOne({ _id: new require('mongodb').ObjectId(id) })
    if (result.deletedCount === 0) {
    return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ message: 'User deleted successfully' })
    } 
    catch (error) {
    res.status (500).json({ error: 'Error deleting user' })
    }
    }
    

    //aggregation 
    const {connectToDatabase}=require('../config/database')
    const getUsersWithAggregation= async (req, res) => {
        try {
        const db =await connectToDatabase()
        // Aggregation pipeline
        const pipeline = [
        {
        $group: {
        _id: "$age",
        // Group by age
        totalUsers: { $sum: 1 } // Count users in each age group
        }
        },
        {
        $sort: {_id: 1 } // Sort by age
        }
        ];
        const users =await db.collection('students').aggregate (pipeline).toArray()
        res.status(200).json(users)
        } catch (error) {
        res.status (500).json({ error: 'Error fetching users' })
        }}



    

















