import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err =>{console.log(err)});
  }, [id]);

  const deleteBook = () => {
    axios.delete(`http://localhost:8000/api/books/${id}`)
      .then(() => navigate('/'))
      .catch(err =>{console.log(err)});
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Available:</strong> {book.isAvailable ? 'Yes' : 'No'}</p>
      <button onClick={deleteBook} className="delete-btn">Borrow Book</button>
    </div>
  );
};

export default BookDetails;