import React from "react";

// const imageForm = document.querySelector("#imageForm")
// const imageInput = document.querySelector("#imageInput")


function Gallery(){

    const handleSubmit = async (event) =>{
        event.preventDefault()
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
