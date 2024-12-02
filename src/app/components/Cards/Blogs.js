import React from "react";

export default function Blogs() {
    return (


        <div className="sm:grid grid-cols-1">
            <div className="sm:flex ">
                <p>Blog Heading 1</p>
                <img src={`/image/4cards/image2.jpeg`} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <button>Know more</button>
            </div>
            <div className="sm:flex">
                <p>Blog Heading 2</p>
                <img src={`/image/4cards/image2.jpeg`} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <button>Know more</button>
            </div>
            <div className="sm:flex">
                <p>Blog Heading 3</p>
                <img className="sm:w-60" src={`/image/4cards/image2.jpeg`} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <button>Know more</button>
            </div>
        </div>
    );
}
