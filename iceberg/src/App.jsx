import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";;
import Education from "./Components/Education";
import ActivityFeed from "./Components/Acitivity";
import About from "./Components/About";
import MayKnow from "./Components/MayKnow.jsx";
import Footer from "./Components/footer";
import TopAd from "./Components/TopAd";
import BottomAd from "./Components/BottomAd";
import PeopleAlsoViewed from './Components/PeopleAlsoViewed';
import InLearning from './Components/InLearning'
import { ProfileProvider } from "./context/ProfileContext";

export const ExperienceContext = React.createContext();

export const API_URL = "http://localhost:8000";;

function App() {
	const [experience, setExperience] = useState([]);

  useEffect(() => {
    async function fetchExperience() {
      const response = await fetch(`${API_URL}/profile`);
      const data = await response.json();
      setExperience(data);
    }
    fetchExperience();
  }, []);
	return (
		<>
      <ProfileProvider>
			<ExperienceContext.Provider value={{ experience, setExperience }}>
				<Profile />
				<Experience />
				<ActivityFeed />
				<Education />
				<About />
				<Skills />
				<MayKnow />
				<Footer />
				<TopAd />
				<BottomAd />
				<PeopleAlsoViewed />
				<InLearning />
			</ExperienceContext.Provider>
      </ProfileProvider>
		</>
	);;
}

export default App
