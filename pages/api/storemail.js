import { connectToDatabase } from '../../lib/mongodb';


export default async function handler(req, res) {
    
    if(req.method == 'POST'){

        const { email } = req.body;

        const { db } = await connectToDatabase();
        const collection = await db.collection("cryptoupdates");
        
        const emailExists = await collection.findOne({ email });
        if(emailExists){
            return res.status(500).send({
                message: "Email already exists",
                email
            });
        }
        
        const result = await collection.insertOne({ email });
        if(!result){
            return res.status(500).send({
                message: "Server error, please try once again!",
                email
            });
        }

        res.status(200).json({
            message: "Email stored successfully!",
            email
        })

    }else{
        res.sendStatus(500);

    }
  }
  