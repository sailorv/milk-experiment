import React from "react"

import moon from "../../images/moon-phases-moon.gif"

const MoonPhase = () => {
  function moon_phase(date) {
    const getJulianDate = (date = new Date()) => {
      // Get the Julian Date
      const time = date.getTime()
      const tzoffset = date.getTimezoneOffset()

      return time / 86400000 - tzoffset / 1440 + 2440587.5
    }

    let jd = getJulianDate(date) // assign var for julian date
    jd /= 29.53 // divide by the moon cycle (29.53 days)
    let phase = parseInt(jd, 10) // int(jd) -> phase, take integer part of jd
    jd -= phase // subtract integer part to leave fractional part of original jd
    phase = Math.ceil(jd * 8) // scale fraction from 0-8 and round by adding 0.5
    phase = phase & 7 // 0 and 8 are the same so turn 8 into 0

    switch (phase) {
      default:
        phase = "New Moon"
        break
      case 0:
        phase = "New Moon"
        break
      case 1:
        phase = "Waxing Crescent Moon"
        break
      case 2:
        phase = "Quarter Moon"
        break
      case 3:
        phase = "Waxing Gibbous Moon"
        break
      case 4:
        phase = "Full Moon"
        break
      case 5:
        phase = "Waning Gibbous Moon"
        break
      case 6:
        phase = "Last Quarter Moon"
        break
      case 7:
        phase = "Waning Crescent Moon"
        break
    }
    return phase
  }

  var tonightMoonPhase = moon_phase(new Date(Date.now()))

  return (
    <div
      className="moonphases post-image scanline-vertical"
      style={{ width: `fit-content`, margin: `0 auto` }}
    >
      <div className="animate-flicker">
        <img
          src={moon}
          alt="moon phases"
          style={{ height: `215px`, width: `auto` }}
          className="animate-twitch"
        />
      </div>
      <div className="green"></div>
      <div
        className="fade"
        style={{
          background: `radial-gradient(rgba(0, 0, 0, 0.2), black 100%)`,
        }}
      ></div>
      <div
        className="moon-caption"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          width: `100%`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <p>
          Tonight's Moon phase:
          <br />
          <span id="moonphase">{tonightMoonPhase}</span>
        </p>
      </div>
    </div>
  )
}

export default MoonPhase
