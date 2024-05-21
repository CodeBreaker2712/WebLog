import { useParams } from "react-router-dom";
import Bloglist from "./Bloglist";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    // const { id } = useParams()

    // const { data: blog, isFetchPending, error, setData: setBlog} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     setBlog(blog.filter((blog) => blog.id !== id))
    // }

    // return ( 
    //     <div className="blog-details">
    //         {isFetchPending && <div>Loading...</div> }
    //         {error && <div>{error}</div> }
    //         {blog && (
    //             <Bloglist blog = {blog} title = "All Blogs!" handleDelete = {handleDelete}/>
    //         ) }
    //     </div>
    //  );
    const { id } = useParams()

    const {data: blog, isFetchPending, error, setData: setBlog} = useFetch('http://localhost:8000/blogs/' + id)

    const handleDelete = (id) => {
        setBlog(blog.filter((blog) => blog.id !== id))
    }

    return ( 
        <div className="home">
            {isFetchPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;