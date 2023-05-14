import { Injectable } from '@nestjs/common';
import { config } from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import { v4 as uuid } from 'uuid';

import { S3Config } from '@/config/s3.config';

config.update({
  accessKeyId: S3Config.AWS_S3_ACCESS_KEY,
  secretAccessKey: S3Config.AWS_S3_SECRET_KEY,
  region: 'kz-ala-1',
  s3: { endpoint: 'https://sanatopia.object.pscloud.io' },
  s3BucketEndpoint: true,
});
@Injectable()
export class S3Service {
  private s3: S3;
  private bucket: string;
  constructor() {
    this.s3 = new S3();
    this.bucket = S3Config.AWS_S3_BUCKET_NAME;
  }

  public async uploadFile(file: Buffer, imageType: string): Promise<string> {
    console.log(S3Config.AWS_S3_ACCESS_KEY);
    console.log(S3Config.AWS_S3_SECRET_KEY);
    console.log(S3Config.AWS_S3_ENDPOINT);
    console.log(this.bucket);

    const params = {
      Body: file,
      Bucket: this.bucket,
      Key: `${uuid()}-${Date.now()}.${imageType}`,
    };
    console.log(`${uuid()}-${Date.now()}.${imageType}`);

    const uploadResult = await this.s3
      .upload(params)
      .promise()
      .catch((err: unknown) => {
        console.log(err);
        throw err;
      });
    return uploadResult.Location;
  }
}
