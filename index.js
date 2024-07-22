console.log("aws with nodejs")

import {  S3Client } from "@aws-sdk/client-s3" 


const s3Client = new S3Client({
    region : "ap-south-1",
    credentials :{
        accessKeyId :"",
        
    }
})

