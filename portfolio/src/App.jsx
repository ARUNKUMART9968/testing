import React from 'react'
import { Navbar, Welcome ,Dock} from '#components/index.js'
import './index.css'


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
       <Dock />
    </main>
  )
}

export default App