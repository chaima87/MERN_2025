import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Link to="/"><button>Catalog</button></Link>
      <Link to="/add"><button>Add Book</button></Link>
    </nav>
  );
}
export default Navbar;