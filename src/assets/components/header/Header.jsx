import './header.css'
import './headerAdaptive.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../../theme/themeSlice'

import arrowBtn from '../../svgs/arrowBtn.svg'
import burger from '../../svgs/burger.svg'
import burgerDark from '../../svgs/burgerDark.svg'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const theme = useSelector((state) => state.theme.current)
    const dispatch = useDispatch()

    useEffect(() => {

        const navList = document.querySelector(".nav__list")
        const navBtn = document.querySelector(".nav__btn")
        const headerNav = document.querySelector(".header__nav")

        menuOpen ? navList.classList.add("menuOpen") : navList.classList.remove("menuOpen")
        menuOpen ? navBtn.classList.add("btnOpen") : navBtn.classList.remove("btnOpen")
        menuOpen ? headerNav.classList.add("navOpen") : headerNav.classList.remove("navOpen")

    }, [menuOpen])

    useEffect(() => {

        const body = document.body
        const themeBtn = document.querySelector(".actions__theme")
        const linksDark = document.querySelectorAll(".nav__list_link")
        const logoNav = document.querySelector(".nav__logo")
        const btnDark = document.querySelectorAll(".big__btn")
        const chooseTitles = document.querySelectorAll(".choose__card")
        const commentsCard = document.querySelectorAll(".comments__card")

        body.classList.toggle("dark")

        themeBtn.classList.toggle("lightBtn")

        logoNav.id == "darkText" ? logoNav.id = '' : logoNav.id = "darkText"

        linksDark.forEach(el => {
            if (!el.classList.contains("darkText")) {
                el.classList.add("darkText")
            }

            if (el.classList.contains("darkText")){
                el.classList.remove("darkText")
            }
        });

        commentsCard.forEach(el => {
            el.id == "darkCard" ? el.id = '' : el.id = "darkCard"
        });

        btnDark.forEach(el => {
            el.classList.toggle("darkBtn")
        });

        chooseTitles.forEach(el => {
            el.id == "white" ? el.id = '' : el.id = "white"
        });

    }, [theme])


    const navBtnClick = () => {
        menuOpen == false ? setMenuOpen(true) : setMenuOpen(false)

        console.log(menuOpen);

    }

    const themeClick = () => {
        dispatch(setTheme())
    }

    return (
        <>

            <header className="header">

                <nav className="header__nav">

                    <Link to="/" className="nav__logo"><span>Area</span></Link>

                    <ul className="nav__list">

                        <li className="nav__list_link menu--border"><a href="#benefits">Benefits</a></li>
                        <li className="nav__list_link"><a href="#specs">Specifications</a></li>
                        <li className="nav__list_link"><a href="#howto">How-to</a></li>
                        <li className="nav__list_link"><a href="#cont">Contact Us</a></li>
                        <li className="nav__list_link"><Link to='/comments'>Comments</Link></li>

                    </ul>

                    <div className="nav__actions">

                        <button className="actions__theme" onClick={themeClick}>Change Theme</button>

                        <Link className="nav__btn" to="/form">Log In <img src={arrowBtn} alt="arrow" /></Link>

                        
                        <button className="nav__burger" onClick={navBtnClick}><img src={theme == "light" ? burger : burgerDark} alt="menu" /></button>

                    </div>

                </nav>

            </header>

        </>
    )
}

export default Header

