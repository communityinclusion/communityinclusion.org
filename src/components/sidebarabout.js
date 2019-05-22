import React from 'react'
import { Link } from "gatsby"

const SidebarAbout = () => (
     <aside className="fl w-25 pa2">
<nav>
    <ul className="ici-sidenav ml0 pl0 list">

        <li className="ici-sidenav__item">
        <Link to="/about/" className="ici-current">About</Link>
            <ul className="ici-sidenav__sublist ml0 pl0 list">


                <li className="ici-sidenav__item">
                    <Link to="/about/history">History of ICI</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/about/mission">Mission and Vision</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/about/staff">Staff</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/about/directions">Directions</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/about/contact">Contact</Link>

                </li>
            </ul>
        </li>
             </ul>
</nav>
</aside>

)

export default SidebarAbout
