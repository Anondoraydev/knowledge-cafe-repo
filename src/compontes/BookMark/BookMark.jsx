import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
	const { title } = bookmark;
	return (
		<div className="bg-yellow-100 p-4 m-4">
			<h3>{title}</h3>
		</div>
	);
};
BookMark.propTypes = {
	bookmark: PropTypes.object,
};
export default BookMark;
