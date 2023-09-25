import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { bucket, client_s3 } from "./clients";

export async function getAllFileNames() {
  const response = await client_s3.send(new ListObjectsCommand({
    Bucket: bucket,
  }));

  const files = response.Contents?.map((file) => file.Key);

  return files;
}