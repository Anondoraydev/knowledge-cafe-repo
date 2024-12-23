import { useState } from "react";
import Blogs from "./compontes/Blogs/Blogs";
import Bookmarkes from "./compontes/Bookmarkes/Bookmarkes";
import Header from "./compontes/Header/Header";

function App() {
	const [bookMarkes, setbookMarkes] = useState([]);
	const handelAddToBookmarks = (blog) => {
		const newbookmarks = [...bookMarkes, blog];
		setbookMarkes(newbookmarks)
	};
	return (
		<>
			<div className="max-w-7xl m-auto">
				<Header></Header>
				<div className="md:flex">
					<Blogs handelAddToBookmarks={handelAddToBookmarks}></Blogs>
					<Bookmarkes bookMarkes={bookMarkes}></Bookmarkes>
				</div>
			</div>
		</>
	);
}

export default App;
