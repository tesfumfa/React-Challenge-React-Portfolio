import React from 'react';
import BudgetTracker from '../../assets/images/budget_tracker.png';
import Covid19Tracker from '../../assets/images/covid19-tracker.png';
import MusicBattleSpotify from '../../assets/images/MusicBattleSpotify.png';
import PortfolioTesfu from '../../assets/images/PortfolioTesfu.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import SocialNetworkAPI from '../../assets/images/SocialNetworkAPI.png';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={BudgetTracker}
                        alt="budgetTracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Budget Tracker</p>
                        <a href="https://github.com/tesfumfa/assignment_challenge_19" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://assignment-challenge-19.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={ Covid19Tracker}
                        alt=" Covid19Tracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Covid 19 Tracker</p>
                        <a href="https://github.com/tesfumfa/TM_Proj_one" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href=" https://tesfumfa.github.io/TM_Proj_one/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={MusicBattleSpotify}
                        alt="MusicBattleSpotify"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Music-Battle-Spotify</p>
                        <a href="https://github.com/azuryte5/music-battle-spotify" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://music-battle-spotify.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={PortfolioTesfu}
                        alt="PortfolioTesfu"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Portfolio Tesfu </p>
                        <a href="https://github.com/tesfumfa/ch2_por" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://tesfumfa.github.io/ch2_por/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={NoteTaker}
                        alt="NoteTaker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Note Taker</p>
                        <a href="https://github.com/tesfumfa/ass_cha_9" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://ass-cha-9.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={SocialNetworkAPI}
                        alt="SocialNetworkAPI"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Social Network API</p>
                        <a href="https://github.com/tesfumfa/assignment_challenge_18" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=5efi7Sq9iQU" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    </section>
    )
}

export default Portfolio;