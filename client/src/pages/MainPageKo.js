import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div>
            <header className="bg-blue-900 p-4">
                <nav className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Left side menu items */}
                        <Link to="/main" className="text-blue-300">GameBattle</Link>
                        <Link to="/tournaments" className="text-blue-300">토너먼트</Link>
                        <Link to="/introduction" className="text-blue-300">회사소개</Link>
                        <Link to="/create-tournament" className="text-blue-300">대회생성</Link>
                        <Link to="/leaderboardko" className="text-blue-300">명예의전당</Link>
                    </div>
                    <div className="flex space-x-4">
                        {/* Right side icons */}
                        <a href="#" className="text-blue-300"><i className="fas fa-cog"></i></a>
                        <a href="#" className="text-blue-300"><i className="fas fa-headphones"></i></a>
                        <a href="#" className="text-blue-300"><i className="fas fa-user"></i></a>
                    </div>
                </nav>
            </header>
  
            <main className="p-4">
                <section className="mb-8">
                    <div className="bg-blue-800 p-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">방영기간 상품권 매일받기 무료배포</h2>
                        <p className="mb-4">방영기간 기간이 끝난 상품권은 모든 도우미에게 무료로 매일배포를 받을 수 있습니다.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">상품권 받기 바로가기</button>
                    </div>
                </section>
  
                <section className="mb-8">
                    <h3 className="text-xl font-bold mb-4">가장 인기있는 게임대회를 한눈에</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Repeat for each game */}
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for League of Legends event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">League of Legends</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Soccer event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">Soccer</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for PUBG event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">PUBG</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for StarCraft event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">StarCraft</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                    </div>
                </section>
  
                <section className="mb-8">
                    <h3 className="text-xl font-bold mb-4">요즘 핫한 추천 대회</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Repeat for each recommended event */}
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for League of Legends event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">League of Legends</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Valorant event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">Valorant 5v5</h4>
                            <p className="text-blue-300">3회 4000원</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Fortnite event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">Fortnite</h4>
                            <p className="text-blue-300">2회 대회대</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Overwatch event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">Overwatch 3v3</h4>
                            <p className="text-blue-300">3회 500원</p>
                        </div>
                    </div>
                </section>
  
                <section>
                    <h3 className="text-xl font-bold mb-4">지금 도전 가장 핫한 게임배틀 공식대회</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Repeat for each battle event */}
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Level Up Cup event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">LEVEL UP CUP</h4>
                            <p className="text-blue-300">GAMECOACH</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for League of Legends event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">League of Legends</h4>
                            <p className="text-blue-300">GAMECOACH</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for Level Up Cup event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">LEVEL UP CUP</h4>
                            <p className="text-blue-300">GAMECOACH</p>
                        </div>
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <img src="https://placehold.co/150x150" alt="Placeholder image for FC Online event" className="mb-4"/>
                            <h4 className="text-lg font-bold mb-2">FC Online</h4>
                            <p className="text-blue-300">LIVE UP 스포츠</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MainPage;
