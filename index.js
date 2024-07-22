import {  GetObjectCommand, S3Client } from "@aws-sdk/client-s3" 
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3Client = new S3Client({
    region : "us-east-1",
    credentials :{
        accessKeyId : "",
        secretAccessKey : ""
    }
})


async function getObjectS3(mykey){

    console.log("key is : " , mykey)
    const command = new GetObjectCommand({
    Bucket : "private.jaydipdev",
      Key : mykey
    })

    const url = await getSignedUrl(s3Client , command);
    console.log(url);

    return url;

}


async function init(){
    console.log("getObject url :  " , await getObjectS3("jaydip.JPG"));

    console.log("creating successfully getObject PreSigned url")
}

init();