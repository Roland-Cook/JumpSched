import express from "express"
import { generateUploadURL } from "./s3.js"


const app = express()

app.use(express.static('ghi'))

app.get('/s3Url', async (req,res) => {
    const url = await s3.generateUploadUrl()
    res.send({url})
})


app.listen(8000, () => console.log("listening on port 8000"))
