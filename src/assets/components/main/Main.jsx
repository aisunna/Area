import './main.css'

import HeroSection from '../heroSection/HeroSection'
import Cracked from '../cracked/Cracked'
import Big from '../big/Big'
import Choose from '../choose/Choose'
import Sceptical from '../sceptical/Sceptical'
import Map from '../map/Map'

const Main = () => {

    return(
        <>
        
            <main className="main">
                
                <HeroSection />

                <Cracked />

                <Big />

                <Choose />

                <Sceptical />

                <Map />
            
            </main>       
        
        </>
    )
}

export default Main