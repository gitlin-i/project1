import {PutObjectCommand, CreateBucketCommand} from '@aws-sdk/client-s3';
import { s3Client } from './sampleClient';

const params = {
    Bucket : "SDK-my-app",
    Key: 'sample_upload.txt',
    Body: 'hello',

}

const run = async () => {

    try {
        const data = await s3Client.send(
            new CreateBucketCommand({Bucket:params.Bucket})
        )
        console.log(data);
        return data;

    } catch (err) {
        console.log("Error!",err);
    }
    try {
        const result = await s3Client.send(
            new PutObjectCommand(params)
        )

        console.log(
            "Success! created"+params.Key+
            " and upload it to "+params.Body+
            "/"+
            params.Key
        );
    } catch (e) {
        console.log("Error",e);
    }
}

export {run};