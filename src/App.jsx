import { useState } from "react";
import Blogs from "./compontes/Blogs/Blogs";
import Bookmarkes from "./compontes/Bookmarkes/Bookmarkes";
import Header from "./compontes/Header/Header";

function App() {
  const [bookMarkes, setbookMarkes] = useState([])
  const handelAddToBookmarks = blog => {
    console.log('book mark add soon');
    
  }
	return (
		<>
			<div className="max-w-7xl m-auto">
				<Header></Header>
				<div className="md:flex">
					<Blogs handelAddToBookmarks={handelAddToBookmarks}></Blogs>
					<Bookmarkes></Bookmarkes>
				</div>
			</div>
		</>
	);
}

export default App;
