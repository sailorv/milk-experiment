import React from "react"

const Apod = () => {
    return (
        <section class="post-image animate-scanline" style={{ position: `relative`, }}>
          <img className="animate-twitch" src="https://apod.nasa.gov/apod/image/2109/RubinsGalaxy_hst1024.jpg" alt="APOD from NASA" />
          <div class="fade"></div>
          <div class="green"></div>
          <div class="post-meta" style={{
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              transform: `translate(-50%, -50%)`,
              width: `80%`
            }}>
                <h2 style={{marginBottom: `0`}}>Space Cam</h2>
          </div>
       </section>
    )
}

export default Apod