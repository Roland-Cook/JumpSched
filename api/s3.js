import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto, { randomBytes } from 'crypto'
import { promisify } from 'util'

dotenv.config()

const region="us-west-1"
const bucketName="jump-sched-bucket"
const accessKeyId=process.env.AWS_ACCESS_KEY_ID
const secrectAcessKey=process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secrectAcessKey,
    signatureVersion:'4'
})

export async function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const imageName= rawBytes.toString('hex')

    const params=({
        Bucket:bucketName,
        Key: imageName,
        Expires:60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}