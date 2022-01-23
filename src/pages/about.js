import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const AboutPage = () => (


  <Layout>
    <Seo />
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <div style={{width: 300}}>
        <div className="post-image animate-scanline">
          <img src="https://sailorven.us/assets/me.gif" />
          <div className="fade"></div>
          <div className="green"></div>
        </div>
      </div>
      <div className="col-2">
      <pre style={{fontFamily:`monospace`, wordWrap: `break-word`, whiteSpace: `pre`, padding: 0, margin: 0, lineHeight: 1.2}}>
  {`           _   _               _
          | | | |             (_)             
  ___ __ _| |_| |__   ___ _ __ _ _ __   ___ 
 / __/ _  | __| '_ \\ / _ \\ '__| | '_ \\ / _ \\
| (__ (_| | |_| | | |  __/ |  | | | | |  __/
 \\___\\__,_|\\__|_| |_|\\___|_|  |_|_| |_|\\___|`}
      </pre> 
      <p>watches a lot of anime and reads science fiction when she can. she started building little anime websites around the year 2000 A.D. and never really stopped.</p>

      </div>
    </div>
  </Layout>

  
)

export default AboutPage
