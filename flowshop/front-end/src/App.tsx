import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [language, setLanguage] = useState('pt-br')

  return (
    <>
    <Navbar titles={['teste','teste']}></Navbar>
     <section className='main-section'>
        <header>
          <h1>FlowShop</h1>
          <p>Mudando o seu visual.</p>
        </header>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
     </section>
    </>
  )
}

export default App
