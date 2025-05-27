import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!id) return;

    if (resource === "people") {
      navigate(`/people/${id}`);
    } else {
      navigate(`/planets/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <select value={resource} onChange={(e) => setResource(e.target.value)} className="border p-1">
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-1"
        placeholder="Enter ID"
      />
      <button type="submit" disabled={!id} className="bg-blue-500 text-white px-2 py-1 rounded">Search</button>
    </form>
  );
}
export default SearchForm