import axios from "axios";

import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

import MovieTile from '../components/MovieTile';
import './GamePage.css'
import { toast } from 'react-toastify';


function GamePage() {

    const [Overview, setOverview] = useState("Suprise! No Plot Summary for you! Take a Random Guess - You have a 50/50 Shot!")
    const [winningTitle, setwinningTitles] = useState({movieTitle : undefined, movieID :  undefined, movieOverview :  undefined})
    const [randomMovies, setRandomMovies] = useState([{movieTitle : undefined, movieID :  undefined, movieOverview :  undefined, moviePoster : undefined}, {movieTitle : undefined, movieID :  undefined, movieOverview :  undefined, moviePoster : undefined}, {movieTitle : undefined, movieID :  undefined, movieOverview :  undefined, moviePoster : undefined}, {movieTitle : undefined, movieID :  undefined, movieOverview :  undefined, moviePoster : undefined}])
    const [Winner, setWinner] = useState(0)
    const [guessCount, setguessCount] = useState(0)
    const [newMovies, setnewMovies] = useState(false)

    // API Call Java Spring server --> API Call to Movie Database
    async function callRandomMovieData() {
        const options = {
            method : "GET",
            url : `/api/random-movies-1`,
        };
        try {
            const response = await axios.request(options);
            return response;
        } catch (error) {
            console.error(error)
        }
    };

    function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };


    async function getRandomMovies() { 

        let movieData = []
        while (movieData.length < 4) {
            try {
                const data: any = await callRandomMovieData();
                let movieTitle = data.data.original_title;
                let movieID = data.data.id;
                let movieOverview = data.data.overview;
                let moviePoster = data.data.poster_path;
                let movieObject = {movieTitle : movieTitle, movieID : movieID, movieOverview : movieOverview, moviePoster : moviePoster};
                
                if (data.data.success !== false) {
                    movieData.push(movieObject);
                    
                };
            } catch (error) {
                console.log(error);
            }
        };

        setOverview(movieData[0].movieOverview);
        setwinningTitles(movieData[0]);


        let randomizedMovies = shuffleArray(movieData);        
        setRandomMovies(randomizedMovies);
    
    };

    const navigate = useNavigate();

    function checkWinner(movieTitle: any) {
        if (movieTitle === winningTitle.movieTitle) {
            setWinner((Winner) => Winner + 1);
            setguessCount((guessCount) => guessCount = 0)
            setnewMovies((newMovies) => newMovies = !newMovies)
            toast.success('🦄 Correct! -- Streak + 1 -- Keep Going!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });

        };
        if (movieTitle !== winningTitle.movieTitle) {
            setguessCount((guessCount) => guessCount + 1)
            if (guessCount  === 1) {
                toast.warn('🦄 Incorrect! -- One More Guess Remaining -- Make It Count', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            };

            if (guessCount > 1) {
                navigate('/EnterScorePage', {state:{score: Winner}})
                setguessCount((guessCount) => guessCount = 0)
                setWinner((Winner) => Winner = 0)
                setnewMovies((newMovies) => newMovies = !newMovies)
                toast.error('🦄 All Guesses Used -- Nice Run! -- Enter Info Below To Place On Leaderboards!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            };
        };
    };


    useEffect(() => {
        getRandomMovies()
      }, [newMovies]);

    
    // DISPLAY the movies
    return (
        <>
        <div>
            <div className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <h3><b>Your Current Streak! --- {Winner}</b></h3>
            </div>
            <div className="p-5 m-3 text-justify text-1.5xl font-semibold text-indigo-950 font-mono">
                {Overview}
            </div>

            <div className="moviegrid">
                <div className="movie1">
                    <button className = "font-mono font-semibold m-3 p-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out duration-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-violet-300 duration-300" onClick={() => checkWinner(randomMovies[0].movieTitle)}>{randomMovies[0].movieTitle}</button>
                    <MovieTile randomMovies={randomMovies[0]} />
                </div>
                <div className="movie2">
                    <button className = "font-mono font-semibold m-3 p-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out duration-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-violet-300 duration-300" onClick={() => checkWinner(randomMovies[1].movieTitle)}>{randomMovies[1].movieTitle}</button>
                    <MovieTile randomMovies={randomMovies[1]}/>
                </div>
                <div className="movie3">
                    <button className = "font-mono font-semibold m-3 p-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out duration-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-violet-300 duration-300" onClick={() => checkWinner(randomMovies[2].movieTitle)}>{randomMovies[2].movieTitle}</button>
                    <MovieTile randomMovies={randomMovies[2]}/>
                </div>
                <div className="movie4">
                    <button className = "font-mono font-semibold m-3 p-2 border-solid border-2 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out duration-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-violet-300 duration-300" onClick={() => checkWinner(randomMovies[3].movieTitle)}>{randomMovies[3].movieTitle}</button>
                    <MovieTile randomMovies={randomMovies[3]}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default GamePage;