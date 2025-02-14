import React from 'react'

const Servers = () => {
  const servers = [
    {
      name: "DesyncRP FiveM",
      description: "Experience an immersive roleplay environment with custom jobs, vehicles, and a dedicated community. Our FiveM server offers unique features and regular events.",
      features: [
        "Custom Economy System",
        "Unique Job Roles",
        "Custom Vehicle Modifications",
        "Regular Community Events",
        "Active Staff Team",
        "Custom Properties"
      ],
      serverIP: "https://cfx.re/join/33zdq8",
      maxPlayers: 64,
      gameType: "fivem",
      requirements: [
        "GTA V (Legal Copy)",
        "FiveM Client",
        "Discord Account",
        "Microphone Required"
      ]
    },
    {
      name: "Outcast Reforger",
      description: "Join our military simulation server featuring intense PvPvE gameplay, custom missions, and realistic combat scenarios.",
      features: [
        "Custom Game Modes",
        "Tactical Gameplay",
        "Dynamic Weather System",
        "Custom Map Locations",
        "Mission Generator",
        "Squad System"
      ],
      serverIP: "your-reforger-ip:2302",
      maxPlayers: 64,
      gameType: "reforger",
      requirements: [
        "Arma Reforger",
        "Discord Account",
        "Microphone Required",
        "Teamspeak (Optional)"
      ]
    }
  ]

  return (
    <div className="servers-page">
      <div className="container">
        <h1>Our Gaming Servers</h1>
        <div className="servers-list">
          {servers.map((server, index) => (
            <div key={index} className="server-detail-card">
              <h2>{server.name}</h2>
              <p className="description">{server.description}</p>
              
              <div className="server-info-grid">
                <div className="info-section">
                  <h3>Key Features</h3>
                  <ul>
                    {server.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="info-section">
                  <h3>Requirements</h3>
                  <ul>
                    {server.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="server-actions">
                <button 
                  onClick={() => window.location.href = server.gameType === 'fivem' 
                    ? `fivem://connect/${server.serverIP}`
                    : `steam://connect/${server.serverIP}`
                  }
                  className="join-button"
                >
                  Join Server
                  <span className="button-glow"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Servers
