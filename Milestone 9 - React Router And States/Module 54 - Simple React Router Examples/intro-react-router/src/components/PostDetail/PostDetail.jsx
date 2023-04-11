import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, userId, body} = post;

    const navigateBack = useNavigate();

    const handlerNavigateBack = () => {
        navigateBack(-1)
    }
    return (
        <div>
            <h3>Details About Your Posts : {id}</h3>
            <h5>Title: {title}</h5>
            <p>Body: <small>{body}</small></p>
            <button onClick={handlerNavigateBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;