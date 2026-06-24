import './big.css'
import './bigAdaptive.css'

import bigImg from '../../imgs/big.png'

const Big = () => {
    
    return(
        <>
        
            <section className="big">

                <article className="big__desc">

                    <h3 className="big__title">See the Big Picture</h3>

                    <p className="big__text">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>

                    <ul className="big__list">

                        <li className="big__link"><span>01</span>Spot Trends in Seconds: No more digging through numbers.</li>
                        <li className="big__link"><span>02</span>Get Everyone on the Same Page: Share easy-to-understand reports with your team.</li>
                        <li className="big__link"><span>03</span>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</li>
                        <li className="big__link link--bottom"><span>04</span>Your Global Snapshot: Get a quick, clear overview of your entire operation.</li>

                    </ul>

                    <button className="big__btn">Discover More</button>

                </article>

                <div className="big__img"><img src={bigImg} alt="figures" /></div>

            </section>

        </>
    )
}

export default Big