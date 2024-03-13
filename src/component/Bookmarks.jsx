import PropTypes from 'prop-types';

const Bookmarks = ({bookmark, readTime}) => {
    // console.log(bookmark.title);
    return (
        <div className="w-1/3 ml-4">
            <div className="text-xl font-bold bg-gray-300 p-4 text-purple-900 rounded-lg"><h1>Spent time on read : {readTime} min</h1></div>
            <div className='bg-gray-300 mt-4 rounded-lg'>
                <div className='p-5'>
                <h1 className="text-xl font-bold">Bookmarked Blogs : {bookmark.length}</h1>
               {
                bookmark.map((item , idx)=> 
                     <div key={idx} className='bg-white p-5 rounded-lg mt-2'>
                        {item.title}
                     </div>)
               }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes={
    bookmark:PropTypes.object,
    readTime:PropTypes.array
}