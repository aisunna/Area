import './heroSection.css'
import './heroSectionAdaptive.css'

import padImg from '../../imgs/pad.jpg'
import phoneImg from '../../imgs/phone.png'
import logo1 from '../../svgs/logo1.svg'
import logo2 from '../../svgs/logo2.svg'
import logo3 from '../../svgs/logo3.svg'
import logo4 from '../../svgs/logo4.svg'
import logo5 from '../../svgs/logo5.svg'
import logo6 from '../../svgs/logo6.svg'

const HeroSection = () => {


    return(
        <>
        
            <section className="heroSection">

                <h2 className="heroSection__title">Browse everything.</h2>

                <div className="heroSection__imgs">

                    <div className="heroSection__imgs_img"><img id='imgPad' src={padImg} alt="pad" /> <img id='imgPhone' src={phoneImg} alt="phone" /></div>

                    <div className="heroSection__imgs_block"></div>

                </div>

            </section>

            <section className="trusted">

                <p className="trusted__text">Trusted by:</p>

                <ul className="trusted__list">

                    <li className="trusted__link"><img src={logo1} alt="logo" /></li>
                    <li className="trusted__link"><img src={logo2} alt="logo" /></li>
                    <li className="trusted__link"><img src={logo3} alt="logo" /></li>
                    <li className="trusted__link"><img src={logo4} alt="logo" /></li>
                    <li className="trusted__link"><img src={logo5} alt="logo" /></li>
                    <li className="trusted__link" id='benefits'><img src={logo6} alt="logo" /></li>

                </ul>

            </section>
        
        </>
    )

}

export default HeroSection