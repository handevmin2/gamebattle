import React from 'react';

function CreateTournament() {
  return (
<div className="container mx-auto px-4">
                    <header className="flex justify-between items-center py-6">
                        <div className="text-lg font-bold">GameBattle</div>
                        <nav className="flex gap-6">
                            <a href="#" className="hover:text-gray-300">Tournaments</a>
                            <a href="#" className="hover:text-gray-300">Leaderboard</a>
                            <a href="#" className="hover:text-gray-300">Games</a>
                        </nav>
                        <div>
                            <img src="https://placehold.co/32x32" alt="User profile image" className="rounded-full" />
                        </div>
                    </header>

                    <main className="mt-10">
                        <h1 className="text-3xl font-bold mb-6">Create a Tournament</h1>
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-400 mb-2">Tournament Name</label>
                                <input type="text" placeholder="Enter a name for your tournament" className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-400 mb-2">Game Type</label>
                                <select className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2">
                                    <option>Select a game type</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-400 mb-2">Starts</label>
                                    <div className="mb-4">
                                        <label className="block text-gray-400 mb-2">Date</label>
                                        <select className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2">
                                            <option>Select a date</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Time</label>
                                        <select className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2">
                                            <option>Select a time</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2">Ends</label>
                                    <div className="mb-4">
                                        <label className="block text-gray-400 mb-2">Date</label>
                                        <select className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2">
                                            <option>Select a date</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Time</label>
                                        <select className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2">
                                            <option>Select a time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-400 mb-2">Registration</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center">
                                        <input type="radio" name="registration" className="form-radio h-5 w-5 text-blue-600" checked />
                                        <span className="ml-2 text-white">Free</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="registration" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2 text-white">Paid</span>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-400 mb-2">Price</label>
                                    <input type="text" placeholder="$0" className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2">Prize Pool</label>
                                    <input type="text" placeholder="$0" className="w-full bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500 px-3 py-2" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                                    Create
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
  );
}

export default CreateTournament;
