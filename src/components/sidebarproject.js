import React from 'react'
import { Link } from "gatsby"

const SidebarProjects = () => (
    <aside className="fl w-25 pa2">
<nav>
    <ul className="ici-sidenav ml0 pl0 list">

        <li className="ici-sidenav__item">
        <Link to="/projects/" className="ici-current">Projects</Link>
            <ul className="ici-sidenav__sublist ml0 pl0 list">


                <li className="ici-sidenav__item">
                    <Link to="/projects/thinkcollege">Think College</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/thinkwork">Think Work</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/explorevr">ExploreVR</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/seln">SELN</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/statedata">StateData</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/catada">Catada</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/nercve">Nercve</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/employmentfirstma">EmploymentFirstMa</Link>

                </li>
            </ul>
        </li>
             </ul>
</nav>
</aside >
)

export default SidebarProjects
