// import React, { useEffect } from "react";
// import Granim from "granim";
// import "./GradientTest.css"

// const GradientTest =() => {

//       useEffect(() => {
//         new Granim({
//           element: "#logo-canvas",
//           direction: "top-bottom",
//           opacity: [1, 1],
//           states: {
//             "default-state": {
//               gradients: [
//                 ['#29323c', '#485563'],
//                 ['#FF6B6B', '#556270'],
//                 ['#80d3fe', '#7ea0c4'],
//                 ['#f0ab51', '#eceba3']
//               ],
//               transitionSpeed: 20000,
//             },
//           },
//         });
//       }, []);
    
//       return (
//         <div className="bloc-logo">
//           <canvas id="logo-canvas" />
//           <div className="logo-mask"></div>
//         </div>
//       );
//     };
    
    
//     export default GradientTest;