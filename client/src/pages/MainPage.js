import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-6">
                <nav className="text-xl font-bold">
                <Link to="/" className="text-white-300">GameBattle</Link>
                </nav>
                <nav className="flex space-x-4 text-gray-300 hover:text-white">
                        <Link to="/tournaments">Tournaments</Link>
                        <Link to="/introduction">Introduction</Link>
                        <Link to="/create-tournament">MakeNew</Link>
                        <Link to="/leaderboard">Leaderboard</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <i className="fas fa-search"></i>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <i className="fas fa-user-circle text-2xl"></i>
                    </a>
                </div>
            </header>

            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Featured tournaments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: 'League of Legends 5v5', prize: '$100,000 prize pool', players: '20,000 players', image: 'league-of-legends.png' },
                        { title: 'Valorant 5v5', prize: '$50,000 prize pool', players: '14,000 players', image: 'valorant.png' },
                        { title: 'Fortnite 1v1', prize: '$25,000 prize pool', players: '7,000 players', image: 'fortnite.png' },
                        { title: 'Overwatch 3v3', prize: '$10,000 prize pool', players: '8,000 players', image: 'overwatch.png' },
                        { title: 'Dota 2 5v5', prize: '$60,000 prize pool', players: '16,000 players', image: 'dota2.png' },
                    ].map((game, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6">
                            <img src={`https://placehold.co/300x200.png?text=${game.title}`} alt={`Placeholder image for ${game.title}`} className="rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">{game.title}</h3>
                            <p className="text-gray-400">{game.prize}</p>
                            <p className="text-gray-400">{game.players}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Popular game categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        'Fantasy landscape with castle',
                        'Mountain landscape with lake',
                        'Mystical forest with glowing trees',
                        'Mountain peak with moon background',
                    ].map((category, index) => (
                        <img key={index} src={`https://placehold.co/300x300.png?text=Category+${index + 1}`} alt={`Placeholder image for ${category}`} className="rounded-lg" />
                    ))}
                </div>
            </section>

            <section className="mt-12 mb-12">
                <h2 className="text-3xl font-bold mb-6">Featured organizations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        'Organization logo 1',
                        'Organization logo 2',
                        'Organization logo 3',
                        'Organization logo 4',
                    ].map((org, index) => (
                        <img key={index} src={`https://placehold.co/150x150.png?text=Org+${index + 1}`} alt={`Placeholder image for ${org}`} className="rounded-lg" />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MainPage;
