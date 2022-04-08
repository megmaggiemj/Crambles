import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Granim from "granim";

function Home() {
  useEffect(() => {
    new Granim({
      element: "#homeGradient",
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
          transitionSpeed: 6000,
        },
      },
    });
  }, []);
  return (
    <section className="introHome">
      <div className="TEST367">
        <div className="bloc-logo">
          <canvas id="homeGradient"></canvas> {/*gradient */}
          <div className="logo-mask1">
            <div className="homepage">
              <div className="container-home"> {/*text block*/}
                <h1 className="name">Crambles!</h1>
                <p className="welcome">a very fun word game!</p>
                <Button
                  variant="outline-secondary"
                  className="toLevelOneButton"
                >
                  <Link to="/Intro" className="toIntro">
                    I want to play
                  </Link>
                </Button>{" "}
              </div>
              <div className="footerHomePage"></div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;

