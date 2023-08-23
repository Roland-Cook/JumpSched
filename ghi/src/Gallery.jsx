import React from "react";
import {generateUploadURL} from "/api/s3.js";


// const imageForm = document.querySelector("#imageForm")
// const imageInput = document.querySelector("#imageInput")

function Gallery(){

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const file = imageInput.files[0]
        // get secur url from our server
        const {url} =await fetch("/s3Url").then(res=res.json())
        console.log(url)
        // post image directly to s3 bucket
        // post request to my server to store any extra data

    }
    return(
        <div>
            <form id="imageForm" onSubmit={handleSubmit}>
                <input type="file" id="imageInput"/>
                <button type="submit">Upload Image</button>
            </form>
            "hello world"
        </div>
        );




}
export default Gallery