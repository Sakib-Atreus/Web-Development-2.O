import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div  className='posts'>
            <h5>ID: {id}</h5>
            <h5>Title: {title}</h5>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}>Show Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigation}>Show Details Post</button>
        </div>
    );
};

export default Post;