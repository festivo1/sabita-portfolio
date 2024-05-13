import React from "react";
import HeaderComponent from "./components/reusableComponents/HeaderComponents";
import Home from "./components/staticComponents/Home";
//import Project,from './components/staticComponents/Project';
import Resume from "./components/staticComponents/Resume";
import Contact from "./components/staticComponents/Contact";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
//   } from "react-router-dom"
import FooterComponent from "./components/reusableComponents/footerComponents";
import {
  Capstone,
  GWP,
  ADDA,
  PM,
  SDDG,
  SMWG,
  WebGIS,
} from "./components/staticComponents/Project";
import "./App.css";
// const App = () => {
//   return (
//     <Router>
//       <div className="wrapper">
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/resume">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//             <Route exact path="/" component={Home} />
//             <Route path="/resume" component={Resume} />
//             <Route path="/contact" component={Contact} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
// import Home from "./components/staticComponents/Home";
// //import Project,from './components/staticComponents/Project';
// import Resume from "./components/staticComponents/Resume";
// import Contact from "./components/staticComponents/Contact";
import Layout from './components/staticComponents/Layout';

function App() {
  return (
    <div className='wrapper'>
      <HeaderComponent className="header" />
      <HashRouter>
      <div className='wrapper'>
        <Routes className="main">
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="contact" element={<Contact />} />

            {/* <Route exact path='/projects' component={Project}></Route> */}
            <Route  path="/resume" element={<Resume/>}></Route>
            <Route exact path="/capstone" element={<Capstone/>}></Route>
            <Route
              exact
              path="/advanced-geographical-data-analysis"
              component={ADDA}
            ></Route>
            <Route
              exact
              path="/geoprocessing-with-Python"
              component={GWP}
            ></Route>
            {/* <Route exact path='/gis-public-health' component={GPH}></Route> */}
            <Route exact path="/project-management" component={PM}></Route>
            <Route
              exact
              path="/spatial-data-design-gis"
              component={SDDG}
            ></Route>
            <Route
              exact
              path="/spatial-modelling-WGIS"
              component={SMWG}
            ></Route>
            <Route exact path="/webgis" component={WebGIS}></Route>
          </Route>
        </Routes>
        </div>
      </HashRouter>

      <FooterComponent className="footer" />
    </div>
  );
}

export default App;
