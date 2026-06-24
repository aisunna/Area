import './sceptical.css'
import './scepticalAdaptive.css'

import scepticalImg from '../../imgs/sceptical.png'

const Sceptical = () => {

    return(
        <>
        
            <section className="scept">

                <div className="scept__img"><img src={scepticalImg} alt="round" /></div>

                <div className="scept__desc">

                    <div className="scept--line"></div>

                    <p className="scept__text">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>

                    <div className="scept__desc_other">
                        <p className="scept__other_title">John Smith</p>
                        <p className="scept__other_subtitle">Head of Data</p>
                    </div>

                    <div className="scept--line-other"></div>

                </div>

            </section>
        
        </>
    )
}

export default Sceptical