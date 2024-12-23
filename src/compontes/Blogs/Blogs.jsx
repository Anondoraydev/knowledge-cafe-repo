import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handelAddToBookmarks }) => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			// .then(data=>console.log(data));
			.then((data) => setBlogs(data));
	}, []);
	return (
		<div className="md:w-2/3 text-4xl">
			<h4>Blogs :{blogs.length} </h4>
			{blogs.map((blog) => (
				<Blog
					key={blog.id}
					blog={blog}
					handelAddToBookmarks={handelAddToBookmarks}></Blog>
			))}
		</div>
	);
};
Blogs.propTypes = {
	handelAddToBookmarks: PropTypes.func,
};
export default Blogs;
