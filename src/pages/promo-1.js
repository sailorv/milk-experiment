import React from "react"

const BytesPage = () => {
  return (
    <div className="animate-scanline animate-twitch">
      <pre
        style={{
          lineHeight: `1.2`,
          fontFamily: `monospace`,
          width: `fit-content`,
          margin: `0 auto`,
        }}
      >{`
                                            .---------\`                                                                                                                                 
                                   ..--.\`        .://:\`                                                                                                                             
                                .-.             ... \`\`::.                                                                                                                           
                              -/\`\`                \`..  \`+o-                                                                                                                         
                             /- :/ ..    \`       -  ./ .\`/ms.                                                                                                                       
                            :. /+..o\` \`  -  \`\`  .\`-\` :/\`:\`/ds++.                                                                                                                    
                           -- :s :-/ \`-  :- .o- \`:\`+/\`+- :-o/\`-:+--                                                                                                                 
                          \`+  h:\`-:: ::  :o\` s:\` o.\`o/-o -.od-\`  .--:-                                                                                                              
                          .:\`.h\`:\`:: /-  .o: //y // .y.y\`\`/oh/:.  \`\`//                                                                                                              
                          : :/s :-:/ :-   yo //N-+s\`\`d:y\`.+s+o/\`--.:+\`                                                                                                              
                          +./+o /:o:\`::   ss-s+y//h-+so+-/+h-+-/- -/                                                                                                                
                        \`/: -s+:::y::/+/:-so+h:o/-:\`ohmds/sm\`\`o  -+\`                                                                                                                
                        :\` \`../s.:ys/+o/\`-+o/: :\`\` \`dMMMNssmo o-o-                                                                                                                  
                       \`\`  : .+/:/h--/smNms-       \`\`hhMd.\`yd\`oyy+                                                                                                                  
                      -+   :..o ///sy+NMMMm.          ::\` -+m /d/y.                                                                                                                 
                     :+       -. .:s+++yNMd       .       +/:--m+/y\`                                                                                                                
                    -:\`-:/-:-:-:   .s/ \`--\`       .     \`+::/./ys/:-                                                                                                                
                    --so//::/--o    -o+.         \`-    :hdsss:-y+/::.                                                                                                               
                       \`...-dd-h.    s:.+/:.         -yymMsys\` -oo--/\`                                                                                                              
                            s. os\`   -..o+doshyso/:-/:+m+yy++./\`://:./\`                                                                                                             
                            /  /s/-\`  -:y/hs/sNh+:-.\` -s\`sh+-:+o:+/::\`o                                                                                                             
                            :\` /o//y//ooo++:y/s       y-:ho-o+:::-+-:--+                                                                                                            
                            -\` /s/-hsmN+..::\` \`    \`\`.s /s+/:.:. \`-:/o\`/+-\`                                                                                                         
                               /s+:yhyys-.\`:\`-:\` \`:-./+ :o/  :-    ..-o\`o+/.                                                                                                        
                               /o++oy+ss -.:/     \`-.o- \`s/ -/.       .o\`+/-\`                                                                                                       
                               //+y/:++o/ ./y/:-----+s+  /:\`:+        -:o /-                                                                                                        
                            :  //y/+-so/y  \`\`+--:--o-+y  ///+\`         /o: -.                                                                                                       
                            +  ++m.+:ho-s    \`..-:o/o-m  :/o.    \`.\`...-:h  -:-                                                                                                     
                           .+  +/h-/-ys:s     -+.++s/ m- \`so  \`..\`       ss  .y\`                                                                                                    
                          \`y:  o/:+-:so/s      \`\`-:+\` sy  +/...          oh/  ./                                                                                                    
                          +o  \`-: h./oo+y        .s.  .y- s:\`          \` hm+-  \`: \`                                                                                                 
                         +./  -\`: s./o- y\`       sh    :: +            :\`mys:.  \`:-                                                                                                 
                       ./\`./  ... s\`+o\` .s       ym:    --o            /:o/ho.    --\`                                                                                               
                      .y. -.   : \`o o/   :+-     .sy/\`\`  /-            /+\`\`sy/     :/                                                                                               
                     -+. ./    : :+\`o/    \`//-    .ss/:  +             /+  ++s-     .:-                                                                                             
                   -+:\` :/:   -\` +/\`+:      \`-/-   /--..\`:             s:  o./+.     \`+\`                                                                                            
                  \`y\`\`\`/os    :  o/\`//        \`-/+\`.+   :.             m\`  s -::-      -:                                                                                           
                 \`/\`  +ds/   .. -+:.-+        /  -s/o\`  o              h   o. :-::\`     .+.                                                                                         
                \`+\`  /d-o\`   :  :+---y        +\`  .s-: ./ \`-.\`..-\`    \`s\`  /+  :..-.      +/\`                                                                                       
                +\` :.h.-:   .. .//\`-/y        .o--+o-- +-:/-    +Nh+: /+-\` :+.  :\` \`-\`     \`++\`                                                                                     
               .o --s+\`o    :  :// \`os:       +/ \`o./\` od.-     s\`  .:d+ : \`/:\`  :\` \`:-      -o:                                                                                    
               s- \`so.o\`   :\` .+\`: ./+y     .... ./\`   \`h      \`+..-:y-s:+  --:\`  -.  -/-      +h+\`                                                                                 
               h.  \`/o\`   \`:  o.:\` +-+:/o++.\`     \`y.  -/      ./    .o-y+o .- :\`  --   -/\`     -hd:                                                                                
               y-. -o\`    :  // : \`/+/.yd.--       +-  /\`      ::     \`o/s+:.:  :\`  .:\`  \`--\`    \`:y+                                                                               
               o/.:o:    -\` -+ .. +/+-+d.  /       -.  +       ::   \`- -osyo-o/. :\`  \`:.   \`-. -\`  \`/o:                                                                             
               \`o++-    .. .s\` : .s+//d/   /        /\`-o       +.  ..  .oos -+++- :\`   --    .:.-.   \`:o:.                                                                          
               :+/.    \`- \`o\` .\` h+//s:o\`\`./        o-\`/       + \`.\`.-\`\`/+d  o-so:\`/    .:\`    ---/.   \`:s+.                                                                        
             \`:::.    \`-  :. \`- +o:+y:+d/. -.       /  :      \`/ .\`//:-\`.sd\` h -hs:.:    \`:\`    \`--:-\`\`   :s+.                                                                      
            .---\`    .-  .. \`- :+-+do/-\`    :       : \`:      /..../-..\`.yy. h  oms//.   -\`:\`     .-:-..\`   -/o/                                                                    
          .---.     -.  .. .- -+\`o+/-\`\`     :       + -\`      s-\`\`.  \`\`\`:oy. y   sms/s\`  \`:\`/      \`::o..-\`\`  ./o-\`                                                                 
         ----     \`-\`  \`.\`-. -+\`o-   ..-\`   \`/      + /      :/:..:-...\`/+o. h   -sNos/   \`+-+.      :+s/\`\`.-\`   :+:\`   \`                                                           
       \`/--\`     .-     .-\`:-/s/.     \`-..\`:-+\`     / o      +.--.\`     //+  s\`   +hyo/:   :+++:\`     //-++- ..-\`  ./+:\`\`\`                                                          
      ./:.     \`-.   \`--:::-..\`           .-:ss     - s     -::.       .+s.  -o\`  +y:ho+/   s-ho+.     // .+o:\` ..-.  ./+/\`                                                         
     -+-      --  \`:++::\`.-.                \` o     :-o     o.         oy:    +/\` :d h-:y   \`o/:y+\` \`  \`//  \`:o/-  \`---\` \`/+/:\`                                                     
    +/\`     .- .:/:.\`    +so--..\`    \`...\`    --    :so    /o:.\`      +d-     + / :d // o/   /o :s:--::\`.s     .:/::-\` .-... .:/:-\`                                                 
   +.    \`-. \`:-       .-:.     .--..\`   .+-   +    :N/    /o+:---.-.+h.      s / ++ .+ -s   \`m\`+:     :.+:       .--:/:..\`\`...-----..-::--.\`                                       
  +.   .-\`\`-:..-    \`.-\`                  \`s:  s    \`N.    +\`      \`+d:\`  \`\`  y / :...+-.s--:/yso:..    +y/            \`---::....------..:////---.                                  
 /-  .-\`\`-.//.-\`   .-\`                      /-\`/\`    h     /       \`h.\`-:/+ooos::-:-::/:::-\`\`\`\`\`         :s+-              \`\`---.-:----//-..\`\`\`\`\`.----....                          
-:  -\`\`::\` .o::-\` --                        -hyo\`   -:     +.      :o    \`oms:.                           \`.:-......\`\`         \`\`\`\`..--.-::///:--\`    \`\`\`.---...\`                   
+  /\`.o/\`   ::yo//.                     \`.-ss:\`..   /      \`//.    :+    \`s.                                   \`./...-/:-...\`\`\`\`\`\`\`   \`\`\`\`\`\`.--::::::..\`\`\`   \`\`\`.--/.\`              
: \`/-:+/\`   .:+.+\`                   \`.-+/+-        /        \`-:.\` -/    \`:                    \`\`..---\`\`\`\`\`\`\`\`\`\`.--:-.//++o+//ossyyss++///:::--\`\`..\`\`.::.---.\`\`    \`.-:.\`           
+  \`..:+/--...::+                 \`./:.\`..\`        \`+         \` .--:/.\`                 \`\`--://oooo:/h/-y//:/:::::--.      \`\`\`...::::::-....--:::::-:-.\`..-....-\`     \`-::.         
./.\`       \`\`.-/s            \`.:+shm/\`:+/.\` \`.-\`.  /+ \`-\`  \`  \` .----/o.          \`\`.:::+-y.\`\`-oo:o/.hs:osoo/:::://+o//::-\`\`\`.:::::-:/+os+/-      \`.-/+/:-\`\`-. \`-:      .-.:\`       
 /-----.\`\`\`     :/.\`      \`-:/oso//:.++--/osdNd+.\`:m: -my\` /hy:\`+dmdy-:o\` \`\`\`\`.-----.  .-.:-\`\`  \`..--+-\`\`\`./----:-:/shy/                ./h+\`         \`:h/.\`-:\`\`-/\`      / \`o\`      
  :///+o++/++//:--:--.....--:-\`.so+//:/++:-.sh..:omo\`.hNMm- /MMh/.+hhho--.---.\`                                   \`-/o/.       \`\`\`\`\`.::::/:----:::::::oy+::/------      .:\`-\`:      
              \`\`.--::---.    :--y-          :/:-  .:/- \`:sds.+dsys+/s\`                                                      \`-oo//::-..\`              \`....--.--\`\`..---:/.-..+      
                        \`:-   :\`/+\`                        .//+.                                                       ----..    \`.-:/++o+:////-.-:-.:::++oo++osss+////--/::o.    
`}</pre>
    </div>
  )
}

export default BytesPage
