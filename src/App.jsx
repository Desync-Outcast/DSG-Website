import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServerCard from './components/ServerCard'
import Footer from './components/Footer'
import VideoBackground from './components/VideoBackground'

function App() {
  return (
    <div className="app">
      <Navbar />
      <VideoBackground videoSource="/dsrp-1.mp4">
        <h1>Welcome to Our Servers</h1>
        <p>Experience gaming like never before</p>
      </VideoBackground>
      <main className="container">
        <section className="servers-grid">
          <ServerCard 
            name="DesyncRP FiveM"
            serverIP="your-fivem-ip:30120"
            maxPlayers="64"
          />
          <ServerCard 
            name="Outcast Reforger"
            serverIP="your-reforger-ip:2302"
            maxPlayers="64"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
