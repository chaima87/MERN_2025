import { useContext } from 'react';
import UserContext from '../UserContext';

function Navbar() {
  const { name } = useContext(UserContext);

  return (
    <nav style={{ padding: '1rem', backgroundColor:'pink' }}>
      <h1>Hi, {name}!</h1>
    </nav>
  );
}

export default Navbar;
