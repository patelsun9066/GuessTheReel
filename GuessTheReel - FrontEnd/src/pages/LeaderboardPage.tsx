import axios from "axios";
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

import ScoreList from '../components/ScoreList';
import { toast } from 'react-toastify';


function LeaderboardPage() {

    const location = useLocation();

    const [scores, setscores] = useState([])

    // API Call Java Spring server --> retreives all records in score (table) in Leaderboard DB (postgres).
    
    async function getAllScores() {
        const options = {
            method : "GET",
            url : `/api/get-all-scores`,
        };
        try {
            const response = await axios.request(options);
            return response;
        } catch (error) {
            console.error(error)
        }
    };
    
    async function displayScores() {
    
        let allScore = [];
        try {
            const data: any = await getAllScores();
            const apiScores = data.data;
            allScore = apiScores;
            let playerScore = location.state.score.score;
            if (playerScore > allScore[allScore.length - 1] || allScore.length < 20) {
                
                let indexPosition = 0;
                for (let i = 0; i < allScore.length; i++) {
                    let checkScore = allScore[i].score;
                    if (playerScore < checkScore) {
                        indexPosition = i+1;
                    }
                }

                toast(`🦄 Wow Congrats! You Made It On the Leaderboards! You are rank ${indexPosition} !`, {
                    position: "top-center",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } catch (error) {
            console.log(error);
        }

        
        if (allScore.length - 20 > 0) {
            while (allScore.length > 20) {
                let lastID = allScore.pop();
                let removeID = lastID.id
                try {
                    const res = await axios.delete("/api/delete-score-id", { data : { "id" : removeID }});
                    console.log(res)
                } catch (error) {
                    console.log(error);
                }
            };
        }

        setscores(allScore);

    }

    useEffect(() => {
        displayScores()
      }, []);

    return (
        <>
            <h1 className="p-5 m-2 text-rose-800 font-mono">LEADERBOARDS</h1>
            <ScoreList scores={scores} />
        </>
    );
}

export default LeaderboardPage;