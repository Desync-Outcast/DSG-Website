import React, { useState, useEffect } from 'react'
import '../styles/globals.css'

const ServerCard = ({ name, serverIP, maxPlayers, gameType = 'fivem' }) => {
  const [playerCount, setPlayerCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        // Different API endpoints based on game type
        const endpoint = gameType === 'fivem' 
          ? `http://${serverIP}/players.json`
          : `http://${serverIP}/status` // Replace with actual Reforger API endpoint
        
        const response = await fetch(endpoint)
        const data = await response.json()
        setPlayerCount(gameType === 'fivem' ? data.length : data.players) // Adjust based on API response
      } catch (error) {
        console.error('Failed to fetch player count:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlayerCount()
    const interval = setInterval(fetchPlayerCount, 60000)
    return () => clearInterval(interval)
  }, [serverIP, gameType])

  const handleJoinServer = () => {
    if (gameType === 'fivem') {
      window.location.href = `fivem://connect/${serverIP}`
    } else {
      // Reforger connection method
      window.location.href = `steam://connect/${serverIP}`
    }
  }

  // Different features based on game type
  const getFeatures = () => {
    if (gameType === 'fivem') {
      return [
        { icon: '🌍', text: 'Role Play' },
        { icon: '👥', text: 'Custom Jobs' },
        { icon: '🚗', text: 'Custom Cars' }
      ]
    } else {
      return [
        { icon: '⚔️', text: 'Outcast Mode' },
        { icon: '🗺️', text: 'Custom Maps' },
        { icon: '🎮', text: 'PvPvE' }
      ]
    }
  }

  return (
    <div className="server-card">
      <div className="card-content">
        <div className="server-status">
          <div className={`status-indicator ${isLoading ? 'loading' : 'online'}`}></div>
          <span className="status-text">Online</span>
        </div>
        
        <h2>{name}</h2>
        
        <div className="player-count">
          <div className="count-display">
            <span className="current">{playerCount}</span>
            <span className="separator">/</span>
            <span className="max">{maxPlayers}</span>
          </div>
          <span className="label">Players Online</span>
        </div>

        {/* <div className="server-features">
          {getFeatures().map((feature, index) => (
            <div key={index} className="feature">
              <span className="icon">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div> */}

        <button onClick={handleJoinServer} className="join-button">
          Join Server
          <span className="button-glow"></span>
        </button>
      </div>
    </div>
  )
}

export default ServerCard
