
import './App.css'
import Events from './components/Events'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Shows from './components/Shows'


function App() {
  

  return (
    <div className='font-inter'>
      <Header />
      <Navbar />
      <Home />
      <Shows />
      <Events />
    </div>
  )
}

export default App
