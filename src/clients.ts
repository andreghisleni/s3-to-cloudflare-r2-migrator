import {
  S3Client,
  GetObjectCommand
} from "@aws-sdk/client-s3";

import { env } from "./env";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const endpoint = `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`;
export const bucket = env.BUCKET_NAME;

export const client_s3 = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});


export const client_r2 = new S3Client({
  region: 'auto',
  endpoint,
  credentials: {
    accessKeyId: env.CLOUDFLARE_ACCESS_KEY,
    secretAccessKey: env.CLOUDFLARE_SECRET_KEY,
  },
});
