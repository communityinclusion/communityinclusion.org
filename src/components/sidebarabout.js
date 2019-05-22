import React from 'react'
import { Link } from "gatsby"

const SidebarAbout = () => (
     <aside className="fl w-25 pa2">
<nav>
    <ul className="ici-sidenav ml0 pl0 list">

        <li className="ici-sidenav__item">
        <Link to="/about-ici" className="ici-current">About</Link>
            <ul className="ici-sidenav__sublist ml0 pl0 list">


                <li className="ici-sidenav__item">
                    <Link to="/history">History of ICI</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/mission">Mission and Vision</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/staff">Staff</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/directions">Directions</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/contact">Contact</Link>

                </li>
            </ul>
        </li>
             </ul>
</nav>
</aside>

)

export default SidebarAbout
