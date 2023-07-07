import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
          <Link to="/" className="m-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50">Rules!</Link>
          <Link to="../GamePage" className="m-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50">Start Guessing!</Link>
          <Link to="../LeaderboardPage" className="m-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50">Leaderboards!</Link>
      </nav>
    );
  }
  
export default Navigation;
  
