import React from 'react';
import backgroundImage from '../assets/Image 219.png';

function Introduction() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <header className="bg-black py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-xl font-bold">GameBattle</div>
                    <nav className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">Tournaments</a>
                        <a href="#" className="text-gray-300 hover:text-white">Leaderboards</a>
                        <a href="#" className="text-gray-300 hover:text-white">Challenges</a>
                        <a href="#" className="text-gray-300 hover:text-white">Rewards</a>
                        <a href="#" className="text-gray-300 hover:text-white">Help Center</a>
                    </nav>
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 px-4 py-2 rounded">Sign up</button>
                        <button className="px-4 py-2">Log in</button>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <section className="relative">
                    <img src={backgroundImage} alt="Gaming event with multiple computer screens and gaming chairs" className="w-full object-cover"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center text-center px-4">
                        <h1 className="text-4xl font-bold mb-2">Join the tournament. Win the prize.</h1>
                        <p className="mb-6">Compete in tournaments for cash prizes and bragging rights. Show off your skills in games like Fortnite, Rocket League, and more.</p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Why join our tournaments?</h2>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">What people are saying</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-user-circle text-3xl text-gray-400"></i>
                                    <div>
                                        <p className="font-semibold">Jenna</p>
                                        <p className="text-gray-400 text-sm">1 month ago</p>
                                        <p className="text-gray-300 mt-1">I love this app I've played in several tournaments and it's been a blast. The tournaments are well organized and the staff is very responsive. I've won some money too. Highly recommend</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-user-circle text-3xl text-gray-400"></i>
                                    <div>
                                        <p className="font-semibold">Joey</p>
                                        <p className="text-gray-400 text-sm">2 months ago</p>
                                        <p className="text-gray-300 mt-1">Great app Easy to use and lots of fun. I've won a few tournaments and the payouts were fast. Definitely check it out if you're into gaming</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-user-circle text-3xl text-gray-400"></i>
                                    <div>
                                        <p className="font-semibold">Samantha</p>
                                        <p className="text-gray-400 text-sm">3 months ago</p>
                                        <p className="text-gray-300 mt-1">This app is awesome I've been playing in daily tournaments and it's been a great experience. The app is easy to navigate and the tournaments are well run. I've won some cash too. Highly recommend</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to play?</h2>
                        <p className="mb-6">Join the tournament and start winning today</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-blue-600 px-8 py-3 rounded text-lg font-semibold">Sign up</button>
                            <button className="px-8 py-3 rounded text-lg font-semibold text-gray-300 hover:text-white">Learn more</button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black py-4">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    &copy; 2023 Dodgeball Tournaments
                </div>
            </footer>
        </div>
    );
}

export default Introduction;
