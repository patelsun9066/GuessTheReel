
import Score from './Score';

function ScoreList({ scores }) {
    return (
        <div className='bg-white-200'>
        <table className="table-fixed border-separate border border-indigo-900" >
            <caption className="capitalize text-center text-1.5xl font-semibold text-rose-800 font-mono">TOP 20 STREAKS IN U.S.A</caption>
            <thead>
                <tr>
                    <th className="border border-indigo-600 w-2/4 text-rose-800 font-mono">Name</th>
                    <th className="border border-indigo-600 w-2/4 text-rose-800 font-mono">Date</th>
                    <th className="border border-indigo-600 w-2/4 text-rose-800 font-mono">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score, i) => 
                    <Score
                        score={score} 
                        key={i}
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default ScoreList;
