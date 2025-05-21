import './App.css'
import React, {useState} from 'react'
import BoxGenerator from './components/BoxGenerator'
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, { id: Date.now(), ...box }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <>
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Box Generator Master</h1>
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} removeBox={removeBox} />
    </div>

      <BoxGenerator/>

    </>
  )
}

export default App
