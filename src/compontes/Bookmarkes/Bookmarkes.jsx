 
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const Bookmarkes = ({bookMarkes}) => {
  return (
		<div>
			<div className="bg-gray-300 ml-4">
			  <h2 className='text-center font-bold p-4 text-2xl'> Book Markes: {bookMarkes.length}</h2>
			  {
				  bookMarkes.map(bookmark=> <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
			  }
			</div>
		</div>
	);
}

Bookmarkes.propTypes = {
	 
	bookMarkes: PropTypes.array 
}

export default Bookmarkes

