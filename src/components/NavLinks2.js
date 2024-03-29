import React from "react";
import { Link } from "gatsby";
import Search from "../components/search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const NavLinks2 = () => {
  return (
    <>
      <ul className="main-nav navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item top-level-link">
          <Link to="/index" className="nav-link active" aria-current="page" >
            Home
          </Link>
        </li>
        <li className="nav-item top-level-link">
          <Link className="nav-link" to="/news">
            News
          </Link>
        </li>
        <li className="top-level-link nav-item dropdown dropdown-mega position-static">
          <Link
            className="nav-link dropdown-toggle"
            to="/about"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            About
          </Link>
          <div className="dropdown-menu shadow">
            <div className="mega-content px-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="d-none d-sm-none col-md-9 py-4">
                    <p>
                      The Institute for Community Inclusion at UMass Boston
                      supports the rights of children and adults with
                      disabilities to participate in all aspects of society. As
                      practitioners, researchers, and teachers, we form
                      partnerships with individuals, families, and service
                      agencies. Together we advocate for personal choice,
                      self-determination, and social and economic justice.
                    </p>
                    <p>
                      We are dedicated to advancing the full inclusion of people
                      with disabilities in all aspects of life. Our work
                      encompasses research, program evaluation, training,
                      consultation, education, policy analysis, and service
                      delivery across four main areas of emphasis: Employment,
                      Education, Community Life, and Health Care.
                    </p>
                    <p>
                      We have three national hubs:{" "}
                      <Link to="https://www.explorevr.org/">ExploreVR</Link> and{" "}
                      <Link to="https://www.thinkwork.org/">ThinkWork</Link>,
                      which focus on inclusive employment, and{" "}
                      <Link to="https://thinkcollege.net/">ThinkCollege</Link>,
                      which focuses on inclusive higher education.
                    </p>
                  </div>

                  <div className="col-12 col-sm-12 col-md-3 py-4">
                    <div className="list-group">
                      <Link className="list-group-item" to="/about">
                        About the ICI
                      </Link>
                      <Link className="list-group-item" to="/about/history">
                        History of ICI
                      </Link>
                      <Link className="list-group-item" to="/about/mission">
                        Mission and Vision
                      </Link>
                      <Link
                        className="list-group-item"
                        to="/about/areas-of-emphasis"
                      >
                        Areas of Emphasis
                      </Link>
                      <Link
                        className="list-group-item"
                        to="/about/what-we-mean-when-we-talk-about-inclusion"
                      >
                        What We Mean When We Talk About Inclusion
                      </Link>
                      <Link
                        className="list-group-item"
                        to="/about/staff-directory"
                      >
                        Staff Directory
                      </Link>
                      <Link className="list-group-item" to="/about/directions">
                        Directions
                      </Link>
                      <Link className="list-group-item" to="/about/glossary">
                        Glossary
                      </Link>
                      <Link className="list-group-item" to="/about/fellowships">
                        Fellowships
                      </Link>
                      <Link className="list-group-item" to="/jobs">
                        Jobs at ICI
                      </Link>
                      <Link className="list-group-item" to="/about/contact">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link nav-item dropdown dropdown-mega position-static">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            Projects
          </Link>
          <div className="dropdown-menu shadow">
            <div className="mega-content sub-menu-block px-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="d-none col-md-4 py-4">
                    <p>
                      Our projects involve conducting state and national
                      employment research, increasing access to higher
                      education, supporting children with disabilities to plan
                      for a fulfilling future, and much more.{" "}
                    </p>{" "}
                  </div>

                  <div className="col-12 col-md-4  pt-4 py-4-md">
                    <div className="list-group">
                      <Link
                        to="/projects/thinkcollege"
                        className="list-group-item"
                      >
                        ThinkCollege
                      </Link>
                      <Link
                        to="/projects/thinkwork"
                        className="list-group-item"
                      >
                        ThinkWork!
                      </Link>
                      <Link
                        to="/projects/explorevr"
                        className="list-group-item"
                      >
                        ExploreVR
                      </Link>
                      <Link to="/projects/seln" className="list-group-item">
                        SELN
                      </Link>
                      <Link
                        to="/projects/statedata"
                        className="list-group-item"
                      >
                        StateData
                      </Link>
                      <Link to="/projects/catada" className="list-group-item">
                        CATADA
                      </Link>
                      <Link to="/projects/nercve" className="list-group-item">
                        NERCVE
                      </Link>
                      <Link to="/projects/emp1stfl" className="list-group-item">
                        Employment First Florida
                      </Link>
                      <Link to="/projects/gator" className="list-group-item">
                        GATOR
                      </Link>
                    </div>
                  </div>
                  <div className="col-12  col-md-4 pb-4 py-4-md">
                    <div className="list-group">
                      <Link
                        to="/projects/employmentfirstma"
                        className="list-group-item"
                      >
                        Employment First Massachusetts
                      </Link>
                      <Link to="/projects/fqi" className="list-group-item">
                        Future Quest Island
                      </Link>
                      <Link to="/projects/lend" className="list-group-item">
                        LEND Program
                      </Link>
                      <Link to="/projects/bchdsp" className="list-group-item">
                        Down Syndrome Program
                      </Link>
                      <Link to="/projects/cle" className="list-group-item">
                        Community Life Engagement
                      </Link>
                      <Link to="/projects/emp1stmo" className="list-group-item">
                        Employment First Missouri
                      </Link>
                      <Link to="/projects/maicei" className="list-group-item">
                        MAICEI
                      </Link>
                      <Link
                        to="/projects/youthvoice"
                        className="list-group-item"
                      >
                        CYVYC
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link nav-item dropdown dropdown-mega position-static">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            Services
          </Link>
          <div className="dropdown-menu shadow">
            <div className="mega-content px-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="d-none col-md-9 py-4">
                    <p>
                      From expert consultation and technical assistance to
                      online training for employment professionals, our services
                      help agency leaders and disability staff to excel and
                      thrive in their work.{" "}
                    </p>
                  </div>

                  <div className="col-12 col-md-3 py-4">
                    <div className="list-group">
                      <Link
                        to="https://consulting.communityinclusion.org/"
                        className="list-group-item"
                      >
                        ICI Consulting
                      </Link>
                      <Link
                        to="https://employmentservices.communityinclusion.org/"
                        className="list-group-item"
                      >
                        ICI Employment Services
                      </Link>
                      <Link
                        to="https://www.directcourseonline.com/employment-services/"
                        className="list-group-item"
                      >
                        College of Employment Services
                      </Link>
                      <Link
                        to="/onlinelearning/cesacre/"
                        className="list-group-item"
                      >
                        CES/ACRE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item top-level-link">
          <Link className="nav-link" to="/publications" aria-disabled="true">
            Publications
          </Link>
        </li>
        <li className="nav-item top-level-link">
          <Link className="nav-link" to="/onlinelearning/" aria-disabled="true">
            Online Learning
          </Link>
        </li>
      </ul>
      <div className="h-100">
         
 <Search indices={searchIndices} />

      </div>
    </>
  );
};

export default NavLinks2;
