
function Score({ score }) {
    return (
        <tr>
            <td className="border border-indigo-600 text-rose-800 hover:text-fuchsia-300 font-mono">{score.name}</td>
            <td className="border border-indigo-600 text-rose-800 hover:text-fuchsia-300 font-mono">{score.date}</td>
            <td className="border border-indigo-600 text-rose-800 hover:text-fuchsia-300 font-mono">{score.score}</td>
        </tr>
    );
}

export default Score;