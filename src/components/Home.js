import Bloglist from './Bloglist';
import useFetch from '../hooks/useFetch';

const Home = () => {

    const {data: blogs, isFetchPending, error, setData: setBlogs} = useFetch('http://localhost:8000/blogs')

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    return ( 
        <div className="home">
            {isFetchPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blogs && <Bloglist blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;
