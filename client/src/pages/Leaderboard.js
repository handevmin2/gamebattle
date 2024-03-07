import React from 'react';

function Leaderboard() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-800">
                <div className="flex items-center space-x-4">
                    <div className="text-gray-500">
                        <i className="fas fa-bars"></i>
                    </div>
                    <h1 className="text-xl font-semibold">GameBattle</h1>
                </div>
                <div className="flex space-x-6 items-center">
                    <a href="#" className="text-gray-400 hover:text-white">Home</a>
                    <a href="#" className="text-gray-400 hover:text-white">Tournaments</a>
                    <a href="#" className="text-gray-400 hover:text-white">Leaderboards</a>
                    <a href="#" className="text-gray-400 hover:text-white">Games</a>
                    <a href="#" className="text-gray-400 hover:text-white">Teams</a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                        New Tournament
                    </button>
                    <div className="text-gray-400">
                        <i className="fas fa-user-circle fa-lg"></i>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex space-x-4 items-center mb-4 lg:mb-0">
                        <h2 className="text-3xl font-semibold">Leaderboards</h2>
                        <div className="text-gray-400">Top players and teams</div>
                    </div>
                    <div className="flex space-x-2">
                        <select className="bg-gray-800 text-white rounded py-2 px-4">
                            <option>All Games</option>
                            <option>Fortnite</option>
                            <option>League of Legends</option>
                            <option>Call of Duty</option>
                        </select>
                        <select className="bg-gray-800 text-white rounded py-2 px-4">
                            <option>All Seasons</option>
                            <option>Season 1</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row py-4 space-y-4 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">Top Players</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'EpicGamer123', points: '5,000 points', rank: 1 },
                                { name: 'ProGamer456', points: '4,500 points', rank: 2 },
                                { name: 'MasterGamer789', points: '4,000 points', rank: 3 },
                                { name: 'EliteGamer012', points: '3,500 points', rank: 4 },
                                { name: 'GamerGirl345', points: '3,000 points', rank: 5 },
                                { name: 'NinjaGamer678', points: '2,500 points', rank: 6 },
                                { name: 'SpeedGamer901', points: '2,000 points', rank: 7 },
                                { name: 'StealthGamer234', points: '1,500 points', rank: 8 },
                                { name: 'ShadowGamer567', points: '1,000 points', rank: 9 },
                                { name: 'RapidGamer890', points: '500 points', rank: 10 },
                            ].map(player => (
                                <div key={player.name} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img src="https://placehold.co/32x32" alt={`Avatar of player ${player.name}`} className="rounded-full" />
                                        <div>{player.name}</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div>{player.points}</div>
                                        <div className="text-gray-400">{player.rank}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">Top Teams</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'EpicTeam123', points: '10,000 points', rank: 1 },
                                { name: 'ProTeam456', points: '9,000 points', rank: 2 },
                                { name: 'MasterTeam789', points: '8,000 points', rank: 3 },
                                { name: 'EliteTeam012', points: '7,000 points', rank: 4 },
                                { name: 'GamerTeam345', points: '6,000 points', rank: 5 },
                                { name: 'NinjaTeam678', points: '5,000 points', rank: 6 },
                                { name: 'SpeedTeam901', points: '4,000 points', rank: 7 },
                                { name: 'StealthTeam234', points: '3,000 points', rank: 8 },
                                { name: 'ShadowTeam567', points: '2,000 points', rank: 9 },
                                { name: 'RapidTeam890', points: '1,000 points', rank: 10 },
                            ].map(team => (
                                <div key={team.name} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <i className="fas fa-users text-gray-400"></i>
                                        <div>{team.name}</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div>{team.points}</div>
                                        <div className="text-gray-400">{team.rank}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
