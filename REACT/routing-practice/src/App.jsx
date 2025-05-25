
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home"; 
import DisplayValue from "./components/DisplayValue";
import ColoredWord from "./components/ColoredWord";
import Error from './components/Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<DisplayValue />} />
        <Route path="/:word/:textColor/:bgColor" element={<ColoredWord />} />
            <Route path="*" element={<Error />} />

      </Routes>
    </Router>
  );
}

export default App;
