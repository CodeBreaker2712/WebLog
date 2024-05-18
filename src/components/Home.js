import { useEffect, useState } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const [isFetchPending, setIsFetchPending] = useState(true)

    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    useEffect( () => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Bad Request!! Resource doesn\'t exist')
                }
                return res.json()
            })
            .then(data => {
                setError(null)
                setBlogs(data)
                setIsFetchPending(false)
            })
            .catch(err => {
                setBlogs(null)
                setError(err.message)
                setIsFetchPending(false)
            })
        }, 1000)
    }, [])

    return ( 
        <div className="home">
            {isFetchPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blogs && <Bloglist blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;
