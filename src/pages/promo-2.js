import React from "react"

import "../styles/styles.scss"

const BytesPage = () => {
  return (
    <div
      style={{
        height: `100vh`,
        display: `flex`,
        alignItems: `center`,
        width: `100%`,
      }}
    >
      <section style={{ width: `100%` }}>
        <div style={{ margin: `0 auto`, width: `90%`, textAlign: `left` }}>
          <p>
            Rydell got his bag of cornflakes out of the cupboard and carefully
            unrolled it. About enough for a bowl. He opened the fridge and took
            out a plastic, snap-top, liter container with a strip of
            masking-tape across the side. He'd written{" "}
            <strong>MILK EXPERIMENT</strong> on the masking-tape with a heavy
            marker.
          </p>
          <p>
            "What's that?" Hernandez asked.
            <br />
            "Milk."
            <br />
            "So why's it say 'experiment'?"
            <br />
            "So nobody'll drink it."
          </p>
          <p style={{ textAlign: `right` }}>
            {" "}
            &mdash; <em>Virtual Light</em> by William Gibson
            <span
              className="cursor"
              style={{
                lineHeight: `1.25`,
                position: `relative`,
                top: `6px`,
                left: `3px`,
              }}
            ></span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default BytesPage
