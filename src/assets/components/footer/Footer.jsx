import './footer.css'
import './footerAdaptive.css'

import endSvg from '../../svgs/Union.svg'

const Footer = () => {

    return (
        <>

            <footer className="footer" id='cont'>

                <section className="footer__connect">

                    <h3 className="connect__title">Connect with us</h3>

                    <p className="connect__text">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>

                    <button className="connect__btn">Learn More</button>

                </section>

                <section className="footer__end">

                    <ul className="end__list">

                        <li className="end__link">Benefits</li>
                        <li className="end__link">Specifications</li>
                        <li className="end__link">How-to</li>

                    </ul>

                    <div className="end__container">


                        <div className="end__container_info">

                            <div className="end__img"><img src={endSvg} alt="union" /></div>

                            <p className="end__info_title">© Area.</p>
                            <p className="end__info_title">2025</p>

                        </div>

                        <p className="end__rights">All Rights Reserved</p>

                    </div>

                </section>

            </footer>

        </>
    )
}

export default Footer