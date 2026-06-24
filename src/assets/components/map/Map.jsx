import './map.css'
import './mapAdaptive.css'

import mapImg from '../../imgs/map.png'

const Map = () => {
    
    return(
        <>
        
            <section className="map" id='howto'>

                <div className="map__sucsess">

                    <h3 className="sucsess__title">Map Your Sucsess</h3>

                    <button className="big__btn">Discover More</button>

                </div>

                <ul className="map__get">

                    <li className="get__link">

                        <h2 className="get__num">01</h2>

                        <div className="get__texts">

                            <h3 className="get__title">Get Started</h3>

                            <p className="get__text">With our intuitive setup, you’re up and running in minutes.</p>

                        </div>

                    </li>

                    <li className="get__link">

                        <h2 className="get__num">02</h2>

                        <div className="get__texts">

                            <h3 className="get__title">Customize and Configure</h3>

                            <p className="get__text">Adapt Area to your specific requirements and preferences.</p>

                        </div>

                    </li>

                    <li className="get__link">

                        <h2 className="get__num">03</h2>

                        <div className="get__texts">

                            <h3 className="get__title">Grow Your Business</h3>

                            <p className="get__text">Make informed decisions to exceed your goals.</p>

                        </div>

                    </li>

                </ul>

                <div className="map__img"><img src={mapImg} alt="mountain" /></div>

            </section>
        
        </>
    )
}

export default Map