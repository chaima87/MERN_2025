import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Styles/Table.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/books')
      .then(res => setBooks(res.data))
      .catch(err =>{console.log(err)});
  }, []);

  return (
    <div className="table-container">
      <h2>Book Catalog</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page count</th>
            <th>Available</th>
            <th>Book Page</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.isAvailable ? 'Yes' : 'No'}</td>
              <td><Link to={`/books/${book._id}`} className="details-btn">Book Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;