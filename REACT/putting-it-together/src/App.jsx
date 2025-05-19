import { useState } from 'react'
import './App.css'

import PersonComponent from './components/PersonComponent';

function App() {
  
  return (
    <div>
      <PersonComponent firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonComponent firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </div>
  )
}

export default App
