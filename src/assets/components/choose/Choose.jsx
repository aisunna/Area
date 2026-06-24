import './choose.css'
import './chooseAdaptive.css'

import galka from '../../svgs/galka.svg'
import krestik from '../../svgs/krestik.svg'

const Choose = () => {

    return (
        <>

            <section className="choose" id='specs'>

                <div className="choose__desc">

                    <p className="choose__desc_subtitle">Specs</p>

                    <h3 className="choose__desc_title">Why Choose Area?</h3>

                    <p className="choose__desc_text">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.</p>

                    <button className="big__btn">Discover More</button>

                </div>

                <div className="choose__cards">

                    <div className="choose__card">

                        <h4 className="choose__card_title">Area</h4>

                        <div className="choose__card_line"></div>

                        <ul className="choose__list">

                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Ultra-fast browsing</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Advanced AI insights</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Seamless integration</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Advanced AI insights</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Ultra-fast browsing</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Full UTF-8 support</li>

                        </ul>

                    </div>

                    <div className="choose__card">

                        <h4 className="choose__card_title choose__card_title--web">WebSurge</h4>

                        <div className="choose__card_line"></div>

                        <ul className="choose__list">

                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Fast browsing</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Basic AI recommendations</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Restricts customization</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Basic AI insights</li>
                            <li className="choose__link"><span><img src={galka} alt="allowed" /></span>Fast browsing</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Potential display errors</li>

                        </ul>

                    </div>

                    <div className="choose__card">

                        <h4 className="choose__card_title choose__card_title--hyper">HyperView</h4>

                        <div className="choose__card_line"></div>

                        <ul className="choose__list">

                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Moderate speeds</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>No AI assistance</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Steep learning curve</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>No AI assistance</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Moderate speeds</li>
                            <li className="choose__link"><span><img src={krestik} alt="allowed" /></span>Partial UTF-8 support</li>

                        </ul>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Choose