import React from 'react';
import BudgetTracker from '../../assets/images/tesfa.jpg';
import FoodieLove from '../../assets/images/tesfa.jpg';
import ShopShop from '../../assets/images/tesfa.jpg';
import WorkDay from '../../assets/images/tesfa.jpg';
import Squid from '../../assets/images/tesfa.jpg';
import Taskinator from '../../assets/images/tesfa.jpg';

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
                        <a href="https://pure-dusk-48925.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={FoodieLove}
                        alt="foodieLove"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Foodie Love</p>
                        <a href="https://github.com/jasongrossman/team-2" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://jasongrossman.github.io/team-2/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={ShopShop}
                        alt="shopShop"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Shop-Shop</p>
                        <a href="https://github.com/TPhondeth/shop-shop" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://mernshopshop.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={WorkDay}
                        alt="workDay"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Work Day Schedular</p>
                        <a href="https://github.com/TPhondeth/challenge-week5" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://tphondeth.github.io/challenge-week5/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Squid}
                        alt="moolah"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">The Squid Store</p>
                        <a href="https://github.com/TPhondeth/the-squid-store" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://thesquidstore.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Taskinator}
                        alt="taskinator"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Taskinator</p>
                        <a href="https://github.com/TPhondeth/taskinator" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://tphondeth.github.io/taskinator/" target="_blank" rel="noopener noreferrer">
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