import React, { useState } from "react"

import moon from "../../images/moon-phases-moon.gif"


const MoonPhase = () => {
    function moon_phase(date) { 
        var year = date.getFullYear();
        var month = date.getMonth(); 
        var day = date.getDate();
        
            if (month < 3) {
                year--;
                month += 12;
            }
        
            ++month;
        
            let jd = 365.25 * year + 30.6 * month + day - 694039.09; // jd is total days elapsed
            jd /= 29.53; // divide by the moon cycle (29.53 days)
            let phase = parseInt(jd, 10); // int(jd) -> phase, take integer part of jd
            jd -= phase; // subtract integer part to leave fractional part of original jd
            phase = Math.ceil(jd * 8); // scale fraction from 0-8 and round by adding 0.5
            phase = phase & 7; // 0 and 8 are the same so turn 8 into 0
        
            switch (phase) {
                case 0: phase = "New Moon"; break;
                case 1: phase = "Waxing Crescent Moon"; break;
                case 2: phase = "Quarter Moon"; break;
                case 3: phase = "Waxing Gibbous Moon"; break;
                case 4: phase = "Full Moon"; break;
                case 5: phase = "Waning Gibbous Moon"; break;
                case 6: phase = "Last Quarter Moon";
                case 7: phase = "Waning Crescent Moon"; break;
            }
            return phase;
            
        }

        var tonightMoonPhase = moon_phase(new Date(Date.now()))
        

  return (
    <div className="moonphases post-image scanline-vertical" style={{width: `fit-content`, margin: `0 auto`}}>
        <div className="animate-flicker"><img src={ moon } alt="moon phases" style={{height: `215px`, width: `auto`}} className="animate-twitch" /></div>
        <div className="green"></div>
        <div className="fade" style={{ background: `radial-gradient(rgba(0, 0, 0, 0.2), black 100%)` }}></div>
        <div className="moon-caption" style={{
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                width: `100%`,
                transform: `translate(-50%, -50%)`
        }}>
            <p>
                Tonight's Moon phase:<br />
                <span id="moonphase">{ tonightMoonPhase }</span>
            </p>
        </div>
    </div>
  )
}

export default MoonPhase
