import { useEffect, useState } from "react";

 
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>console.log(data));
        
    },[])
    return (
        <>
        </>
    );
};

export default Blogs;