import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";
import {BrainFeatures} from "./components/brain-features";
import {BrainSite} from "./components/brain-site";
import {Price} from "./components/Price";
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import './fonts/font-awesome/css/font-awesome.min.css';
import './css/style.css';
import {getContent, getPosts} from "./api/api";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <BrainFeatures data={landingPageData.BrainFeatures} />
      {/*<Features data={landingPageData.Features} />*/}
      <BrainSite data={landingPageData.Site} />
      {/*<About data={landingPageData.About} />*/}
      {/*<Services data={landingPageData.Services} />*/}
      {/*<Gallery data={landingPageData.Gallery} />*/}
      <Team data={landingPageData.Team} />
      <Testimonials data={landingPageData.Testimonials} />
      <Price />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
