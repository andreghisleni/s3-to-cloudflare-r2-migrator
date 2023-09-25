import { GetObjectCommand } from "@aws-sdk/client-s3";
import { bucket, client_r2, client_s3 } from "./clients";
import { Readable } from "node:stream";
import { Upload } from '@aws-sdk/lib-storage';


export async function download_upload(file: string) {
  const response = await client_s3.send(new GetObjectCommand({
    Bucket: bucket,
    Key: file,
  }));

  const stream = response.Body;

  if (stream instanceof Readable) {

    const upload = new Upload({
      client: client_r2,
      params: {
        Bucket: bucket,
        Key: file,
        Body: stream,
        ContentType: response.ContentType,
      }
    });

    await upload.done();

    console.log(`File uploaded successfully. ${file}`);
  }

}