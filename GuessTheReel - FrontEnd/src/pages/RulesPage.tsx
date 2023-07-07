
function RulesPage() {

    return (
        <>
        <div className="bg-cover bg-center">
            <article>
                <br></br>
                <h2 className="capitalize text-1.5xl font-bold text-indigo-950 font-mono"><b>Welcome to Guess the Reel! A movie title guessing trivia game, designed to be played with friends, family, or even by yourself!</b></h2>
                <br></br>
                <h2 className="capitalize hover:uppercase text-1.5xl font-semibold underline text-indigo-950 font-mono"><b>The instructions are simple:</b></h2>
                <h2 className="capitalize hover:uppercase text-center hover:text-right hover:underline leading-loose hover:font-bold text-1.5xl font-semibold text-indigo-950 font-mono" >A random movie plot will be display to the player along with four movie titles representing possible correct answers</h2>
                <h2 className="capitalize hover:uppercase text-center hover:text-right hover:underline leading-loose hover:font-bold text-1.5xl font-semibold text-indigo-950 font-mono">You have two attempts to pick the correct answer! Players with the Longest Streaks will be added to our leaderboards</h2>
                <br></br>
                <br></br>
                <h2 className="capitalize hover:uppercase text-1.5xl font-semibold underline text-indigo-950 font-mono"><b>Important Note:</b></h2>
                <h2 className="capitalize hover:uppercase text-center hover:text-right hover:underline leading-loose hover:font-bold text-1.5xl font-semibold text-indigo-950 font-mono" >all movie information is pulled via the TMDB.com API - API call limit is 50 requests per second</h2>
                <h2 className="capitalize hover:uppercase text-center hover:text-right hover:underline leading-loose hover:font-bold text-1.5xl font-semibold text-indigo-950 font-mono">if app fails to load movie data when playing the game then api call limit is reached, please restart the game after a few seconds</h2>
            </article>
        </div>
        </>
    );
}

export default RulesPage;