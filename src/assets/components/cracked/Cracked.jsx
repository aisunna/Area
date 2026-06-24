import './cracked.css'
import './crackedAdaptive.css'

import amplify1 from '../../svgs/amplify1.svg'
import amplify2 from '../../svgs/amplify2.svg'
import amplify3 from '../../svgs/amplify3.svg'
import amplify4 from '../../svgs/amplify4.svg'
import amplifyImg from '../../imgs/mountains.jpg'

const Cracked = () => {

    return(
        <>
        
            <section className="cracked">

                <p className="cracked__text">Benefits</p>

                <h2 className="cracked__title">We’ve cracked the code.</h2>

                <p className="cracked__text">Area provides real insights, without the data overload.</p>

            </section>

            <section className="amplify">

                <article className="amplify__cards">

                    <div className="amplify__card">

                        <img src={amplify1} alt="svg" className="amplify__logo" />

                        <h5 className="amplify__card_title">Amplify Insights</h5>

                        <p className="amplify__text">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>

                    </div>

                    <div className="amplify__card">

                        <img src={amplify2} alt="svg" className="amplify__logo" />

                        <h5 className="amplify__card_title">Control Your Global Presence</h5>

                        <p className="amplify__text">Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>

                    </div>

                    <div className="amplify__card">

                        <img src={amplify3} alt="svg" className="amplify__logo" />

                        <h5 className="amplify__card_title">Remove Language Barriers</h5>

                        <p className="amplify__text">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>

                    </div>

                    <div className="amplify__card">

                        <img src={amplify4} alt="svg" className="amplify__logo" />

                        <h5 className="amplify__card_title">Visualize Growth</h5>

                        <p className="amplify__text">Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>

                    </div>

                </article>

                <div className="amplify__img"><img src={amplifyImg} alt="mountains" /></div>

            </section>
        
        </>
    )
}

export default Cracked