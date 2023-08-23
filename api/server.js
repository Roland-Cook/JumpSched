import express from 'express'
import s3 from './s3.js'

const app = express()

app.use(express.static('front'))

app.get('s3url', (req, res) =>{
    const ur =s3.generateUploadURL()
    res.send({url})
})


app.listen(3000, ()=>console.log("listening on port 3000"))