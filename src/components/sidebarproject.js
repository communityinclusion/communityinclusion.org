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
                    <Link to="/projects/catada">CATADA</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/nercve">NERCVE</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/employmentfirstma">EmploymentFirstMA</Link>

                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/fqi">Future Quest Island</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/lend">Boston LEND</Link>
                </li>
                <li className="ici-sidenav__item">
                    <Link to="/projects/bchdsp">Boston Children’s Hospital Down Syndrome Program</Link>
                </li>
            </ul>
        </li>
             </ul>
</nav>
</aside >
)

export default SidebarProjects
