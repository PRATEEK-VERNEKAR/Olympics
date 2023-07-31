import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MiniHeader from "./Covers/MiniHeader";
import Header from "./Covers/Header";
import Footer from "./Covers/Footer";
import Noticebar from "./Covers/Noticebar";
import SignerType from "./Register/SignerType";
import History from "./Statistics/History"
import Post from "./SocialMedia/Post";
import Favourites from "./SocialMedia/Favourites";
import Quiz from './QuizLayout/Quiz';
import Stats from './Statistics/Stats'
import HomeApp from "./Home/HomeApp";
import FanSignin from "./Register/FanSignin";
import OrgSignin from "./Register/OrgSignin";
import Login from "./Register/Login";
import SportsLayout from "./Sports/SportsLayout";
import SportsArticle from "./Sports/SportsArticle";
import CountriesLayout from "./Countries/CountriesLayout";
import {motion,AnimatePresence} from 'framer-motion';

function App() {
  return (
    <div className="mainBody">
      <BrowserRouter>
      <AnimatePresence mode="exit">
        <Noticebar/>
        <MiniHeader />
        <Header />
        
        <div
        className="md:mx-24">
            <Routes>
                <Route exact path="/" element={<HomeApp />}></Route>
                <Route exact path="/orgsignin" element={<OrgSignin />}></Route>
                <Route exact path="/fansignin" element={<FanSignin />}></Route>
                <Route exact path="/signertype" element={<SignerType />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/history" element={<History />}></Route>
                <Route exact path="/post" element={<Post />}></Route>
                <Route exact path='/favourites' element={<Favourites/>}></Route>
                <Route exact path='/quiz' element={<Quiz/>}></Route>
                <Route exact path="/stats" element={<Stats />}></Route>
                <Route exact path="/sports" element={<SportsLayout />}></Route>
                <Route exact path="/sportarticle" element={<SportsArticle />}></Route>
                <Route exact path="/countries" element={<CountriesLayout />}></Route>
            </Routes>
        </div>
        <Footer />
      </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;

