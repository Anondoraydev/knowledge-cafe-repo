import Blogs from "./compontes/Blogs/Blogs";
import Bookmarkes from "./compontes/Bookmarkes/Bookmarkes";
import Header from "./compontes/Header/Header";

function App() {
	return (
		<>
			<Header></Header>
			<div className="md:flex">
        <Blogs></Blogs>
        <Bookmarkes></Bookmarkes>
			</div>
		</>
	);
}

export default App;
