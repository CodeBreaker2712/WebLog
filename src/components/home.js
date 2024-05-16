import { useEffect, useState } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const [isFetchPending, setIsFetchPending] = useState(true)

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    useEffect( () => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsFetchPending(false)
            })
        }, 1000)
    }, [])

    return ( 
        <div className="home">
            {isFetchPending && <div>Loading...</div> }
            {blogs && <Bloglist blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;
