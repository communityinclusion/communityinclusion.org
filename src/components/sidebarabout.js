import React from 'react'
import { Link } from "gatsby"

const SidebarAbout = () => (
     <aside className="fl w-25 pa2">
<nav>
    <ul className="ici-sidenav ml0 pl0 list">

        <li className="ici-sidenav__item">
            <a href="/about-ici" className="ici-current">About</a>
            <ul className="ici-sidenav__sublist ml0 pl0 list">


                <li className="ici-sidenav__item">
                    <a href="/history">History of ICI</a>
                </li>
                <li className="ici-sidenav__item">
                    <a href="/mission">Mission and Vision</a>
                </li>
                <li className="ici-sidenav__item">
                    <a href="/staff">Staff</a>
                </li>
                <li className="ici-sidenav__item">
                    <a href="/directions">Directions</a>
                </li>
                <li className="ici-sidenav__item">
                    <a href="/contact">Contact</a>

                </li>
            </ul>
        </li>
             </ul>
</nav>
</aside>

)

export default SidebarAbout
