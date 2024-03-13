import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs";
import Bookmarks from "./component/Bookmarks";
import Header from "./component/Header";

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readTime, setReadTime] = useState(0)
  const handleMarkAsRead =(readingTime, id)=>{
    // console.log(readingTime);
    setReadTime(readTime + readingTime)
    const remaining = bookmark.filter(item => item.id !==id)
    setBookmark(remaining)
  }
  // console.log(readTime);
  const handleBookmarks =(props)=>{
    const newBookmarks = [...bookmark , props]
    setBookmark(newBookmarks)
    // console.log(newBookmarks);
  
  }
  

  return (
    <div className="container px-10 mx-auto">
      <Header></Header>

      <div className="flex justify-between px-10">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks readTime={readTime} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
