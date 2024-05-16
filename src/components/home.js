import { useEffect, useState } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return ( 
        <div className="home">
            {blogs && <Bloglist blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;
