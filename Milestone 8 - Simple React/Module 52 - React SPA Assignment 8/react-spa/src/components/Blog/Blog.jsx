import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';
import profileLogo from '../../assets/images/1.png';

const Blog = (props) => {
    const {cover, name, title, date, readTime} = props.blog;

    const handleBookmarked = props.handleBookmarked;

    // console.log(props);

    const markAsRead = props.markAsRead;

    let time = 0;
    
    return (
        <div>
            <div className="blogs-container">
                <div className="blog-container">
                    <img src={cover} alt=""/>
                    <div className="profile">
                        <div className="logo-info">
                            <div>
                                <img src={profileLogo} alt=""/>
                            </div>
                            <div className="name-info">
                            <p><strong>{name}</strong><br/><small>{date}</small></p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <h5>0{readTime} min read </h5>
                            <button onClick={() => handleBookmarked(props.blog.title)}><FontAwesomeIcon icon={faBookmark}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pop'>
                <h2>{title}</h2>
                {/* <a href="" onClick={() => markAsRead(props.blog.readTime)}>Mark as read</a> */}
                <button onClick={() => markAsRead(props.blog.readTime)} className='bg-white text-primary text-decoration-underline'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;