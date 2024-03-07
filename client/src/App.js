import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MainPageKo from './pages/MainPageKo';
import TournamentList from './pages/TournamentList';
import CreateTournament from './pages/CreateTournament';
import Introduction from './pages/Introduction';
import Leaderboard from './pages/Leaderboard';
import LeaderboardKo from './pages/LeaderboardKo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageKo />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentList />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboardko" element={<LeaderboardKo />} />

      </Routes>
    </Router>
  );
}

export default App;
