import {Routes, Route} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Home from './components/Home';
import Person from './components/Person';
import Planet from './components/Planet';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="p-4">
      
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:params/:id" element={<Person />} />
        <Route path="/:params/:id" element={<Planet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}
export default App