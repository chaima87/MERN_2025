import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Styles/Form.css';


const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', pages: '', isAvailable: false });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : name === 'pages' ? Number(value) : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/books', form)
      .then(() => navigate('/'))
      .catch(err =>{console.log(err)});
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <label>Title: <input name="title" value={form.title} onChange={handleChange} required /></label>
      <label>Author: <input name="author" value={form.author} onChange={handleChange} required /></label>
      <label>Pages: <input name="pages" type="number" value={form.pages} onChange={handleChange} required /></label>
      <label>Available: <input name="isAvailable" type="checkbox" checked={form.isAvailable} onChange={handleChange} /></label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;