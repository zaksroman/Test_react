import React from 'react';
import Postitem from "./Postitem";

const Postlist = ({posts, title, remove}) => (
    <div>
        <h1 style={{textAlign: "center"}}>
            {title}
        </h1>
        {posts.map((post, index) =>
            <Postitem remove={remove} post={post} number={index + 1} key={post.id} />
        )}
        <h2>
            {'Posts quantity ' + posts.length}
        </h2>
    </div>
);

export default Postlist;