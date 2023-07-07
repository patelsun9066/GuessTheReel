import axios from "axios";
import { useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function EnterScorePage() {

    const [playerName, setPlayerName] = useState("Anonymous");
    const [date, setDate] = useState('00/00/0000');
    
    const location = useLocation();
    const navigate = useNavigate();

    const addScore = async () => {
        const newScore = {name: playerName, date : date, score : location.state.score};
        const json = JSON.stringify(newScore);
        try {
            const res = await axios.post("/api/add-new-score", json, {
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        };
        navigate("/LeaderboardPage", {state:{score : newScore}});
    }

    return (
        <>
        <div>
            <h1 className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>THANKS FOR PLAYING!</h1>
            <br></br>
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                Enter Your Info Below To See If You Made It On The ----
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white"> Leaderboards!</span>
                </span>
                </blockquote>
        </div>
        <div>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <br></br>
                    <label className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block relative text-white m-2" ><span className="relative text-white font-bold"> Name</span></label>
                    <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        type="text"
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)} 
                        id="name"/>
                    <br></br>
                    <label className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block relative text-white m-2" ><span className="relative text-white font-bold"> Date</span></label>
                    <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"/>
                    <br></br>
                    <br></br>
                    <label>
                    <button className = "m-3 p-2 animate-bounce border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50 bg-pink-500 relative text-white hover:-translate-y-1 hover:scale-110 hover:bg-violet-300 duration-300"
                        type="submit"
                        onClick={addScore}
                        id="submit"
                    >I`m Feeling Lucky!</button></label>
                </fieldset>
            </form>
        </div>    
        </>
    );
}

export default EnterScorePage;