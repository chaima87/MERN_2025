import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard;
