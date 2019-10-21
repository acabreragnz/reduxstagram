import React from 'react';
import Photo from "./Photo";

function Photogrid({ posts, ...props }) {
    return (
        <div className="photo-grid">
            <div className="photo-grid">
                {posts.map((post, i) => <Photo key={i} i={i} post={post} {...props} />)}
            </div>
        </div>
    );
}

export default Photogrid;