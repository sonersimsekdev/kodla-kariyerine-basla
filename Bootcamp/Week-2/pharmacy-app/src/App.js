import React from 'react'
import Medicine from './components/Medicine'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Medicine />  {/* Medicine component*/}
    </div>
  )
}

export default App;