import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    // console.log(Bookmark);
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('knowledge.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog =><Blog
                     key={blog.id} 
                     handleMarkAsRead={handleMarkAsRead}
                     handleBookmarks={handleBookmarks}
                     blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;
Blogs.propTypes={
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}