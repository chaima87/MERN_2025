
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <h1>Person List</h1>
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Blonde" />
      <PersonCard firstName="Alice" lastName="Johnson" age={45} hairColor="Brown" />
      <PersonCard firstName="Bob" lastName="Anderson" age={52} hairColor="Gray" />
    </div>
  );
}

export default App;
