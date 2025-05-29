import { useContext } from 'react';
import UserContext from '../UserContext';

function Form() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <label>
        Change your name: 
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: '1rem' }}
        />
      </label>
    </div>
  );
}

export default Form;
