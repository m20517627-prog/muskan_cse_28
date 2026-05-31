import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Student from './student'
import App8 from './App8'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <h2>Student Information</h2>
  <Student name="Raj" course="B.tech" marsks="90"/>
  <Student name="Ram" course="M.tech" marsks="95"/>
  <Student name="Rohan" course="MCA" marsks="98"/>
  <Student/>

<App8/>
</>
  );
}

export default App
