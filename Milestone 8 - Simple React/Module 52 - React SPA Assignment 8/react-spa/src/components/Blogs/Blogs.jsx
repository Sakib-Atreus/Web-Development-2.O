import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css';
import profileLogo from '../../assets/images/1.png';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [booked, setBooked] = useState([]);
    const [reads, setReads] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const handleBookmarked = ({bookmark}) => {
        const newBooked = [...booked, bookmark];
        setBooked(newBooked);
        console.log(blogs);
    }

    const markAsRead = ({blogread}) => {
        const newReads = [...reads, blogread]
        setReads(newReads);
        // console.log(blogs[0].readTime);
    }

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmarked={handleBookmarked}
                        markAsRead={markAsRead}
                    ></Blog>)
                }
            </div>
            <div className='bookmarks-container'>
                <div className='spentTime'>
                    <h3>Spent time on read : {blogs.readTime} min</h3>
                </div>
                <div className='bookmarkedList'>
                    <h2>Bookmarked Blogs : {booked.length}</h2>
                    <p>{}</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
