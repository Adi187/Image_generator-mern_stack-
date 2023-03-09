import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration,OpenAIApi} from 'openai';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router=express.Router()

const configuration=new Configuration({


    apiKey:process.env.OPENAI_API_KEY

    apikey:process.env.OPEN_API_KEY,


    apikey:process.env.OPEN_API_KEY,
parent of eaf2b86 (made correction in the api key)

    apikey:process.env.OPEN_API_KEY,
parent of eaf2b86 (made correction in the api key)
})

const openai=new OpenAIApi(configuration);

router.route('/').get((req,res)=>{
    res.send('Hello from DALL-E!');
});

router.route('/').post(async(req,res)=>{
   try{
     const { prompt }=req.body;

     const aiResponse=await openai.createImage({
        prompt,
        n:'1',
        size:'1024x1024',
        response_format:'b64_json',
     });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     const image=aiResponse.data.data[0].b64_json;
=======
     const image=arResponse.data.data[0].b64_json;
>>>>>>> parent of eaf2b86 (made correction in the api key)
=======
     const image=arResponse.data.data[0].b64_json;
>>>>>>> parent of eaf2b86 (made correction in the api key)
=======
     const image=arResponse.data.data[0].b64_json;
>>>>>>> parent of eaf2b86 (made correction in the api key)
     res.status(200).json({photo:image});
   }
   catch(error){
     console.log('error');
     res.status(500).send(error?.response.data.error.message)
   }
});
export default router;

