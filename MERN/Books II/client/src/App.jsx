import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import AddBook from './views/AddBook';
import BookDetails from './views/BookDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Book Catalog</h1>
          <nav>
            <Link to="/" className="nav-btn">Catalog</Link>
            <Link to="/add" className="nav-btn">Add Book</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;