import React from 'react';
import './Home.css';
import img from '../../img/p.jpeg';

const Home = () => {
    return (
        <section>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 positioning">
                            <h1>Learn Without <br/>Limits</h1>
                            <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                            <div className="button-group">
                                <button className='btn-1'>Join Now</button>
                                <button className='btn-2'>Try Coursera For Business</button>
                            </div>
                    </div>
                    <div className="col-lg-6 right-side">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;