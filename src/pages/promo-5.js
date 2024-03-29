import React from "react"

import "../styles/styles.scss"

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
                                             .----:-:--\`                                                                                                                                                
                                             \`---:-.\`      \`.////.                                                                                                                                            
                                          .--.\`            ... \`\`:/-\`                                                                                                                                         
                                        -:-\`                \`.-.  \`.o/.                                                                                                                                       
                                      \`+-\`.- \`\`             \`\` \`:. \`\`+do\`                                                                                                                                     
                                     \`/- /o-\`+.    -       \`\`:\` \`o..:\`/dh+.\`                                                                                                                                  
                                     :\` :s\`:.o  -  :   --. \`-\`:-\`.o..:-+y:/s:-                                                                                                                                
                                    /- .h.\`::/  /  -./ \`s:\` /-\`+o\`/+ .-/s: \`-//+.\`\`                                                                                                                           
                                   \`o  os :\`:: -+  \`/s\` o:/ \`s\`.s+.s\` /.yh:-   ..-/.                                                                                                                          
                                   .:\`.oo /\`:: //   :+- :+y- o: -y\`y- o hh-:-  \`\`-s.                            \`\`\`\`......\`\`\`\`                                                                                
                                   :\`-///\`:::/ ::   -oo :+hs\`y+\`.d:y:\`s\`d+o/\`.:--o:                    \`.-:+osyhhhddddddddddhhhyyo+:-.\`                                                                       
                                   o.////\`:o+/\`//   \`sh.o+oy-os:+soo::s/h\`o.//\`\`+\`               \`\`-+shdmmhyo+/:--...\`\`\`\`...--:/+oyhmmdhs                                                                
                                 \`//\`:o+o /+y-/:+-://oy/h/:s:+.-+shyo-oys -s. \`/+             \`:shmmyo/-\`                            \`-/oymmhs/\`                                                              
                                 +.  \`\`os./:oo/oso.\`:+o+o\`/-\`. .mMMMNydsd. o\`.+\`\`          .ohNds/.                                        .:sdNho-                                                           
                                \`.  :--o:+-:h//.-syys-:.  \`    ::NmMM//ssy ssho         .odNh/.                                                \`/yNmo.                                                        
                               \`:  \`:  o-///o/.ymNMMNd:          -ods\` s+h oy/h.      :hMh/\`                                                      \`/hMh:                                                      
                              -s\`   .-../ :++od+sNNMNh                 oo+\`:N+/y.   :dNy-                                                             -sNd/                                                    
                             :o\`       .+  \`.s//\`+omh/       :\`       /:/.:-hso// -hNy.                                                               .sNh-                                                  
                            \`+\`:/++://:./\`   \`oo. \`\`\`        ..     \`++:++.oyo//+oNd-                                                                  -hNo\`                                                
                            \`-/s/+/////:+/    \`so:.          -\`   ./dNdymmddNmmmmmo\`                                                                    \`oNh.                                               
                                 ..\`.ym+:y     o+\`-o/-.\`         -hmNMMNyo+/:--...                                                                         /Nd.                                              
                                     /+ \`d:    :-\`\`doyssyyso//::+//m+sdNms-\`                                                                                /Nd\`                                             
                                     -:  h+:.\`  \`/:h+ss/sNmy+/--\` .h\`osdohmd+.                                                                                oMs                                             
                                    \`.:  d-+++-:o/hoyo:s+y-       o+\`ho/-sssdNs                                                                                 \`mN.                                         
                                     .:  y-//doyhs-:.:+:\`.       \`h\`.d+/o/..sMs                                                                                  oMo                                          
                                      .  y/+/oymdy\`/ /.\`\`\`\`  \`.--:o :y/..\`:-h                                                                                   -Mh                                            
                                         y//+hdssy::.\`/.--.  -.\`-o/ \`s+  --:hM-                                                                                  .Md                                            
                                         y//y/o/yo-\`-:/y\`   \`::--s-  o+ \`:s\`yM:                                                                                 :Mh                                            
                                     \`   h:+o/-+ss/- .+oo::-..-/+sy  :o //- +Ms                                                                                  sM+                                            
                                     /   y:h.+:ooys:    /:-::-/+-+h  -s o/  \`NN\`                                                                               \`NN\`                                            
                                     +  .y+d\`+:y/os.    \`.-::/y+o-m\` \`y\`y    +My                                                                              yM+                                             
                                    \`o  :/+h::-h+oo.     .o:.s/y-\`d/  +o:  \`.-yMo                                                                             +My                                              
                                    s+  /:/+/.-yo/o.      \`.:./+  od  \`d\`.-.\` \`yMs                                                                         oMh\`                                              
                                   +s.  /\`:-h.:ss/y:         /+.  .h: .y:\`     \`oNh.                                                                     .yNs\`                                               
                                  +-+   /.- h\`/+o\`+o        .s+    //\`:/\`        /mm/\`                                                                  /mm/                                                 
                                \`:-.+   -/ \`y\`/++ \`y\`       /dh    \`::+.          .sNd:\`                                                            \`:hNs.                                                  
                               .s- -:   \`/ -+ +/-  -y.      \`yh+. \` \`.s\`            -dNd/\`                                                       \`/hmy-                                                    
                              .s: \`/\`   -- // o/\`   .++.     \`oy+--  ./              /sodds-\`                                                    \`-sdms-                                                      
                            \`:/- .:/    /  +/\`o/     \`-//.    -++/:. /\`              ++ \`yymds:.                                              .:sdmy/\`                                                        
                           /o:. -+/.   \`: \`o/\`+/        \`:+.\`  +..\`. +              \`h:  /-:ohmdho:.\`                                    \`.:ohdmy/.                                                           
                          .s\`\` :oos    :\` :+-\`//         \`\`:o+\`-/   ./              \`m\`  :/ ::/o+ydmhyo/-\`\`\`                      \`\`\`.:oyhmmy+-\`                                                              
                         \`/\`  -yhy-    /  /o\`.-o         /\` \`:h/o\`  o\`              \`y   .s \`/-::\` .:+shmmdhyso+/::--....--::/+osyhdmmhs+:.                                                                   
                        \`+\`  .ys.s    :\` ./s\`--d         /-   ++-- \`o \`.-..---.     -s\`   d\` \`/-.--      .+yo+osyhhddmmmmmddhyso+/:-\`                                                                         
                        o. :\`ss\`+.   \`/  /// -/s.        \`+:-+:y\`: :::/o     -Nho-\` ++-\`  y/  \`/\` \`:.      .+o.                                                                                               
                       -+ .:/h\`:/    :\` ./:/ .o++        -y\` o/.+.\`sso\`:     s/..:/-d:\`/  +\`:  \`/\`  :-\`      -o:\`                                                                                             
                       y. \`+s/.o    .:  //.- .o/y       ./:  +. .  \`h:       +  .:+o+h./\` ./.:  \`/. \`-/-      \`/y/\`                                                                                           
                       d   -o:o\`    /  .o\`/  +-+y:..----\`    \`o/   \`y       \`s--\`\`\`o/-y/+  /\`-:  \`:.  \`:+-      .ym+.                                                                                         
                      -y-   :o\`    :.  s-\`/  o:+-/dh:+\`       \`s-  ./       .+     \`/+/ss-\`+  -:   -:\`  \`-:.     \`/hy.                                                                                        
                      .s--\`/o.    .-  +/ -. ::o/.sd. --        +\`  /.       -+     \`\`+/y:y.-/\` .:   ./\`   \`-:\` \`\`  \`/y/\`                                                                                      
                       s+.++-\`   \`:\` :+\` : \`oo+.+d:  \`+        /\`  o        :/   \`-. .o+h::/++- -:   \`:.    \`:-\`:\`   \`/o:\`                                                                                    
                       \`s+/-     :\` -s\` -. os/:/ys    /        --.:s        +- \`--\`\` -o+d\` +/o+:\`--    -:\`    .:.--\`   \`:o/:\`                                                                                 
                      \`+//.     :. .o\` \`: -d//+y-o:.../        \`o-\`/        o \`-\`\`:.\`\`:sy: -/:yo/\`:.    .:\`    \`---/-\`   \`:yo.                                                                                
                    \`-/::\`     -.  /. \`:\`\`h:/+y:/hy-\` /\`        /  /       \`+\`..-+::-.\`ho+ /o :hs/.+\`    \`/.     .:-/:.\`   \`:s+.                                                                              
                   \`:---\`    \`-.  -- \`-\`\`s-:+ds//-    \`/        / \`/       /..-.//--.\`\`d++ :o  sms/-/   \`-\`/\`      --::.-.\`  \`-+o+\`                                                                           
                 \`-:.:.     \`:\`  -- \`:\`\`o-.so+-.\`      /        + .-      \`s-.\`\`.  \`\`.-y+/\`/+  \`sms+o-   .:\`/\`      ./:o-.--\`   ./o:\`    \`                                                                    
                .:.:-     \`--   ..\`.-\`\`+-\`y. \`..--\`    ./       o /\`      :/--.-----../+o/.:o   :oNooo.   ./.o.\`     \`//h/.\`.-.\`  \`:o/.   \`.                                                                  
              \`::--\`     \`:.    \`\`:.\`.++++-     \`/:.\`\`-\`o\`      + +       o:..---\`    +/+. .y    odhoo/\`   ///+:.      ///+o-\`.--.\`  -++:\`\`\`.\`                                                                
             \`/::\`      .:     .--./+--:-          .--:o++      : y      ---/.       \`++o   s\`   +h/ys/+.   s-y++-     \`//-.+o:\`\`.--.\`  -++:..                                                                
            .o/-      \`:.    .:///-.--\`               -.:h\`     :\`s      +:.         /+y.   //.  .d-ss/+o   \`s/oy+:     \`++\` ./o/-  \`---\`  -+o+.                                                              
           -+:\`     \`--  -/+o+:\` \`/-\`\`                   -:     +:o     :+          -yh.    -/:. \`N..h /y\`   ///-y+.-::. \`+/   \`:/+-.  \`---.\` \`:++/.                                                          
          /o.     .-- .//-\`\`     \`syo::---.\`\`\`...---.\`    +     +yo     y+o/:.     \`yy.     \`+ + .N\` h.\`o+    s+\`-y:\`\`\`./ /o      .::+//-\`\`\`----.\`.:+/-.                                                      
         /:    \`.-.\`\`-:\`       .::.\`      \`..\`\`     \`s-   o     /N/     s+-\`\`\`-----ys\`      \`y / /s  o\` -y    s+:o.\`\`   ./.o-        \`-.-:/:-..\`\`--:-:--:-::////:-\`\`                                          
        /:   \`--\`\`-/-\`--    \`--.\`                    .s:  /:    -N.     +       \`\`hy-\`   .  -o /\`--..+:--y:::/osy+-\`.    .sy/             \`\`---::------:--:----:/++/::-.\`                                     
       :/  \`--\`\`--.s--.\`   ./\`                        \`/-\`.+    \`h      +        /y\`\`-//++ooy+::-::::/::::-...\`\`          \`/y+-    \`          \`\`.-----:--:-://:...\`\`\`\`\`.--:----.\`                             
      .+  .-\`.:/. .o//-.\` -:\`                          .yh+/    -/     \`+\`       h.    .:Ndo:.\`                             \`-//-......\`           \`\`\`.-------:/::/::--\`   \`\`\`\`.--:-...\`                      
      +\` \`/ .o/\`   /.soy:/-                         \`-oyo-\`:    +       :+:\`     h\`     ++\`                                      \`\`:....--.\`.\`\`           \`\`\`\`...--::::/::-.\`.\`    \`\`\`.-::-/\`                 
      /  /: o/+    --y..o-                      \`\`/:/o:\`   \`    /        \`-/-.   o-     o\`                           \`\`            \`:::--+ooooss+//+ooo++::::---..\`\`\`\`\`...-::-:---..\`     \`--::.\`             
      /  .:-:+o:\`\`\`\`.-///                     .::-::-.         ./           .-:-./-\`    .                 \`\`..--+/ooosyo:/+:///::///:-:-  \`\`.\`...-://+++s+/::::://++o//::.\`\`...----.--.\`      .:::.\`          
      /-\`   \`\`......-:/+/                \`.-/ys-\`.---\`     \`   +:  \`      \`-  \`::-:+-               \`\`..:-s:.-+:d-o+\` +y.:y-+---::--.--..\`\`..\`\`\`\`\`...----:/+///.\`    \`..-:///::.\`.-:. .-:\`      .:-:.         
       :/-\`\`\`          -s\`           \`./oshyyy\`.os/.\`\`.:os:/\` .d: \`+/  \`+..\` +o+/:.-o:        \`\`\`-:/:-::o:y/..\`.:+/os+yy//+o+yo///oooossso/--\`\`\`\`.-----...--/++yo/         .-//o/- \`+\`  .+\`      \`:\`:/\`       
       -/-:::::--.\`\`\`\`  ./:.\`\` \`\`\`\`://:::+o:+--/:-/oyyymNh+\`\`:hd\` /NNo\` +Nms..+mNNd/:o-\`\`.-:-----.\`      \`\`\`\`\`        .\`     .     \`\`.:ohh+.                 \`-+/:\`\`        \`\`/y/--::\`.--/.       / \`+-       
        \`-://+/://++/+++////:-.-...\`-::-\`-h:::/::/-.\`  ss\`:/+oh--/sdmNh.\`/NNmy:-+ooo+...--.\`                                        \`.-//:\`       \`\`\`\`.-:/o+///:::--::::::::/oo/:-------:.     \`\`/.-:\`/       
                         \`\`.-:--:-\`   .:-/y\`           -:/.   .::\`  \`/sys.+y+oo+++o                                                            \`.:oo+:--\`\`        \`\`\`     \`\`\`\`.-..-----...--:-://---.-s       
                                 \`/-   .::-o\`                           .//+.                                                             -::--.\`    \`.-:/+ooso////+/---::--///o+osooossos+//+:--:/::o:  
`}</pre>
    </div>
  )
}

export default BytesPage
