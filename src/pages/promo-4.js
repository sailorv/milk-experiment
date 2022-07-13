import React from "react"

import "../styles/styles.scss"

const BytesPage = () => {
  return (
    <div
      className="scanline-vertical animate-twitch"
      style={{
        display: `flex`,
        alignItems: `center`,
        textAlign: `center`,
        width: `fit-content`,
      }}
    >
      <div
        className="post-image"
        style={{
          position: `relative`,
          width: `auto`,
          height: `auto`,
          maxHeight: `fit-content`,
        }}
      >
        <img src="https://live-milk-experiment.pantheonsite.io/wp-content/uploads/2021/08/allegory-of-inclination-409x1024.jpg" />
        <div className="fade"></div>
        <div className="green"></div>
      </div>
    </div>
  )
}

export default BytesPage
