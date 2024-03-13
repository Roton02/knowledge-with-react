import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    // console.log(blog);
    const {id,title, author, author_img, cover, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className="w-full mb-6 rounded-lg" src={cover} alt="" />
            <div className="flex  justify-between">
                <div className="flex">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-4">
                    <h1 className="font-bold text-xl">{author}</h1>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <h1>{reading_time}  min read</h1>
                    <button onClick={()=>handleBookmarks(blog)} className="ml-2">
                        <FaRegBookmark></FaRegBookmark>
                        </button>
                </div>
            </div>
            <h1 className="text-3xl font-bold my-4">{title}</h1>
            <h1>{hashtags.map(hashtag =>{
                return (
                    <a href=""
                        key={hashtag} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2">#{hashtag}
                    </a>
                )
            } )}</h1>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className="bg-gray-200 p-1 my-2 text-pink-600 font-semibold rounded-md"><u>Mark as read</u></button>
        </div>
    );
};

export default Blog;
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}