import React from 'react';

function LeaderboardKo() {
    const players = [
        { rank: 1, name: 'Sarah', points: 149, wins: 2, kills: 14 },
        { rank: 2, name: 'Jeff', points: 142, wins: 3, kills: 12 },
        { rank: 3, name: 'Alex', points: 139, wins: 4, kills: 13 },
        { rank: 4, name: 'Emily', points: 137, wins: 5, kills: 15 },
        { rank: 5, name: 'Ryan', points: 134, wins: 6, kills: 10 },
        { rank: 6, name: 'Jen', points: 131, wins: 7, kills: 9 },
        { rank: 7, name: 'Mike', points: 129, wins: 8, kills: 16 },
        { rank: 8, name: 'Amanda', points: 126, wins: 9, kills: 8 },
        { rank: 9, name: 'David', points: 123, wins: 10, kills: 17 },
        { rank: 10, name: 'Samantha', points: 120, wins: 11, kills: 8 }
    ];

    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-6">
                <div className="text-2xl font-bold">명예의 전당</div>
                <nav className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white">게임</a>
                    <a href="#" className="text-gray-400 hover:text-white">팀</a>
                </nav>
            </header>
            <div className="flex gap-4 mb-6">
                <button className="bg-gray-800 py-2 px-4 rounded">리그오브레전드</button>
                <button className="bg-gray-800 py-2 px-4 rounded">포트나이트</button>
                <button className="bg-gray-800 py-2 px-4 rounded">Apex Legends</button>
            </div>
            <div className="text-xl font-bold mb-4">Top 10</div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-400">
                        <th className="pb-2">Rank</th>
                        <th className="pb-2">Player</th>
                        <th className="pb-2">Points</th>
                        <th className="pb-2">Wins</th>
                        <th className="pb-2">Kills</th>
                        <th className="pb-2">Games Played</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.rank} className="border-b border-gray-800">
                            <td className="py-3">{player.rank}</td>
                            <td className="flex items-center py-3">
                                <img className="h-8 w-8 rounded-full mr-3" src={`https://placehold.co/32x32`} alt={`Avatar of player ${player.name}`} />
                                {player.name}
                            </td>
                            <td>{player.points}</td>
                            <td>{player.wins}</td>
                            <td>{player.kills}</td>
                            <td>{player.rank + 3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderboardKo;
