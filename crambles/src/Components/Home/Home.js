import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Granim from "granim";

function Home() {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "top-bottom",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            [
              { color: "#833ab4", pos: 0.2 },
              { color: "#ff8c00", pos: 0.8 },
              { color: "#38ef7d", pos: 1 },
            ],
            [
              { color: "#40e0d0", pos: 0 },
              { color: "#ff8c00", pos: 0.2 },
              { color: "#ff0080", pos: 0.75 },
              { color: "#38ef7d", pos: 1 },
            ],
          ],
          transitionSpeed: 25000,
        },
      },
    });
  }, []);
  return (    
  <section className="intro">
      <div className="TEST367">
        <div className="bloc-logo">
          <canvas id="logo-canvas"></canvas> {/*the actual gradient */}
          <div className="logo-mask1">
    <div className="homepage">
      <div className="container-home">
        <h1 className="name">Crambles!</h1>
        <p className="welcome">a very fun word game!</p>
        <Button variant="outline-secondary" className="toLevelOneButton">
          <Link to="/Intro" className="toIntro">
            I want to play
          </Link>
        </Button>{" "}
      </div>
      <div className="footerHomePage"></div>
    </div> </div>
            </div>
          </div>
    
    </section>
  );
}
export default Home;









//   return (

//             <div className={L1p1 === true ? "display" : "hide"} id="testAgain">
//               <div className="monster">
//                 <img src={monsterIcon} />
//               </div>{" "}
//               <br />
//               <div className="hiThere">Hi there!</div>
//               <div className={L1p1 === true ? "display" : "hide"}>
//                 <Button
//                   variant="outline-secondary"
//                   className="buttonP2"
//                   onClick={() => setL1p2(!L1p2)}
//                 >
//                   Oh! um..hello!?!
//                 </Button>
//               </div>
//               <div className={L1p2 === true ? "display" : "hide"}>
//                 Looks like you got a little lost on your hike! I can help you
//                 get back on track...but...
//                 <br></br>{" "}
//                 <Button
//                   variant="outline-secondary"
//                   className="buttonP3"
//                   onClick={() => setL1p3(!L1p3)}
//                 >
//                   but what?
//                 </Button>
//               </div>
//               <div className={L1p3 === true ? "display" : "hide"}>
//                 ...do you think you could help me with a few things first? Do
//                 you..know how to...read?
//                 <br></br>
//                 <Button
//                   variant="outline-secondary"
//                   className="buttonP4"
//                   onClick={() => setL1p4(!L1p4)}
//                 >
//                   I do!
//                 </Button>
//               </div>
//               <div className={L1p4 === true ? "display" : "hide"}>
//                 A friend from far away sent me a book of fun games but I can't
//                 read human words!
//                 <br></br>
//                 <Button
//                   variant="outline-secondary"
//                   className="buttonP4"
//                   onClick={() => setL1p5(!L1p5)}
//                 >
//                   oh!
//                 </Button>
//               </div>
//               <div className={L1p5 === true ? "display" : "hide"}>
//                 If you help me figure these out, I promise to help you get home!
//                 <br></br>
//                 <Button className="buttonP5">
//                   <Link to="/Level1">I'll help you!</Link>
//                 </Button>{" "}
             

//   // at the end of the animation, a button will appear to take the player to Level1
// }
// export default GameStart;
