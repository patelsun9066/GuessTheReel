
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import RulesPage from './pages/RulesPage';
import GamePage from './pages/GamePage';
import Navigation from './components/Navigation';
import LeaderboardPage from './pages/LeaderboardPage';
import EnterScorePage from './pages/EnterScorePage';


function App() {
  

  return (
    <>
    <header>
      <h1 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Guess the Reel!</h1>
    </header>
    
    <Router> 
      <Navigation />

      <Routes>
        <Route path='/' element={<RulesPage />} />
        <Route path='/GamePage' element={<GamePage />} />
        <Route path='/LeaderboardPage' element={<LeaderboardPage />} />
        <Route path='/EnterScorePage' element={<EnterScorePage />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
