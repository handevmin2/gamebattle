import React from 'react';

function TournamentList() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <header className="p-5 border-b border-gray-800">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">GameBattle</h1>
            <div className="space-x-4">
                <a href="#" className="text-gray-400">Live</a>
                <a href="#" className="text-gray-400">Tournaments</a>
                <a href="#" className="text-gray-400">Videos</a>
                <a href="#" className="text-gray-400">Clips</a>
                <a href="#" className="text-gray-400">Friends</a>
                <a href="#" className="text-gray-400"><i className="fas fa-search"></i></a>
                <a href="#" className="text-gray-400"><i className="fas fa-bell"></i></a>
                <a href="#" className="text-gray-400"><i className="fas fa-user-circle"></i></a>
            </div>
        </div>
    </header>
    <main className="p-5">
        <section className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Tournaments</h2>
            <p className="text-gray-400 mb-5">Join a tournament and compete against the best players</p>
            <div className="flex space-x-3 mb-5">
                <button className="bg-blue-600 px-3 py-1 rounded">All Games</button>
                <button className="bg-gray-800 px-3 py-1 rounded text-gray-400">League of Legends</button>
                <button className="bg-gray-800 px-3 py-1 rounded text-gray-400">Fortnite</button>
                <button className="bg-gray-800 px-3 py-1 rounded text-gray-400">Call of Duty</button>
            </div>
            <div className="flex bg-gray-800 p-3 rounded mb-10">
                <input type="text" placeholder="Find a tournament" className="bg-transparent flex-grow text-white placeholder-gray-500 outline-none" />
            </div>
            <div className="flex justify-between text-gray-400 mb-5">
                <span>Popular</span>
                <span>Starting Soon</span>
                <span>Open Now</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {tournamentData.map(tournament => (
                    <div key={tournament.id} className="bg-gray-800 p-5 rounded-lg">
                        <img src={tournament.image} alt={`Promotional image for ${tournament.title}`} className="rounded-lg mb-5" />
                        <h3 className="text-xl font-semibold mb-2">{tournament.title}</h3>
                        <p className="text-gray-400 mb-2">{tournament.description}</p>
                        <p className="text-blue-500 mb-5">{tournament.prize}</p>
                        <p className="text-gray-400 mb-5">{tournament.start}</p>
                        <button className="bg-blue-600 px-3 py-1 rounded text-white">Join</button>
                    </div>
                ))}
            </div>
        </section>
    </main>
</div>
  );
}

const tournamentData = [
    {
        id: 1,
        title: 'Free Entry Fortnite WorldCup',
        description: 'Duo 1,000+ Teams',
        prize: '$10,000 Prize',
        start: 'Starts in 2 days',
        image: 'https://placehold.co/600x400.png?text=Fortnite+WorldCup&font=source-sans-pro'
    },
    {
        id: 2,
        title: 'Free Entry League of Legends Championship',
        description: 'Solo 5,000+ Teams',
        prize: '~$100,000 Prize',
        start: 'Starts in 5 days',
        image: 'https://placehold.co/600x400.png?text=League+of+Legends+Championship&font=source-sans-pro'
    },
    {
        id: 3,
        title: 'Free Entry Call of Duty Tournament',
        description: 'Team 2,000+ Teams',
        prize: '$50,000 Prize',
        start: 'Starts in 7 days',
        image: 'https://placehold.co/600x400.png?text=Call+of+Duty+Tournament&font=source-sans-pro'
    },
    {
        id: 4,
        title: 'Free Entry Minecraft Build Battle',
        description: 'Duo 500+ Teams',
        prize: '$5,000 Prize',
        start: 'Starts in 10 days',
        image: 'https://placehold.co/600x400.png?text=Minecraft+Build+Battle&font=source-sans-pro'
    }
];

export default TournamentList;
