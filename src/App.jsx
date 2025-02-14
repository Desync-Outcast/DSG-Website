import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServerCard from './components/ServerCard'
import Footer from './components/Footer'
import VideoBackground from './components/VideoBackground'
import Servers from './pages/Servers'

function App() {
  return (
    <Router basename="/DSG-Website">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <VideoBackground videoSource="./dsrp-1.mp4">
                <h1>Welcome to Our Servers</h1>
                <p>Experience gaming like never before</p>
              </VideoBackground>
              <main className="container">
                <section className="servers-grid">
                  <ServerCard 
                    name="DesyncRP FiveM"
                    serverIP="https://cfx.re/join/33zdq8"
                    maxPlayers="64"
                  />
                  <ServerCard 
                    name="Outcast Reforger"
                    serverIP="your-reforger-ip:2302"
                    maxPlayers="64"
                  />
                </section>
              </main>
            </>
          } />
          <Route path="/servers" element={<Servers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
