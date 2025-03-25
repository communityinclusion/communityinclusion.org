/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

var timeLine = React.createClass({
    render: function() {
      return (
        <section className="timeline" id="tl">
          <center><p><img src="https://communityinclusion.org/images/dec_ici_jc.png" alt="DEC to ICI" className="img-fluid" /></p>
            <p><b>↓ Scroll down to view timeline ↓</b></p></center>
          <ul>
            <li>
              <div>
                <img src="img/jfk200.jpg" alt="jfk" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1961–1963</time> President John F. Kennedy appoints the "President's Panel on Mental Retardation" in 1961. This leads to new legislation funding university-based developmental disability research centers in each state.
                Amendments to the Social Security Act increase services for maternal and child health, and fund studies in each state on the status of services for people with mental retardation (now called intellectual and developmental disabilities).
              </div>
            </li>
            <li>
              <div>
                <img src="img/BCH.jpg" alt="Boston Children's hospital" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1964</time> Children's Hospital (now Boston Children's Hospital) obtains funding for constructing 2 floors in the new Fegan Building to be devoted to clinical services for people with developmental disabilities.
              </div>
            </li>
            <li>
              <div>
                <img src="img/allenpipe.jpg" alt="Allen Crocker" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1967</time> The Developmental Evaluation Clinic (DEC) at Children's Hospital opens its doors. Dr. Allen C. Crocker is the founder and first director of the DEC, which later grows into the Institute for Community Inclusion (ICI).
              </div>
            </li>
            <li>
              <div>
                <img src="img/nutrituonist.jpg" alt="Women interacting with young people" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1969</time>Grants that fund the DEC are received from the federal departments of Maternal and Child Health and Social Rehabilitation Services.
              </div>
            </li>
            <li>
              <div>
                <time>1969</time>Staffing grows to 17 professionals representing 10 disciplines. Collaboration with area universities is started.
              </div>
            </li>
            <li>
              <div>
                <time>1969-72</time> Clinical and training programs grow. Clinical services include comprehensive “primary evaluations” delivered by interdisciplinary teams to 4–8 children a week.
              </div>
            </li>
            <li>
              <div>
                <time>1969-72</time> “Down I” program combines research and clinical services for young children who have Down syndrome. A demonstration preschool classroom opens for children with disabilities in collaboration with the Massachusetts Department of Education and Mental Health.
              </div>
            </li>
            <li>
              <div>
                <time>1972</time> William (Bill) Kiernan, current dean of the School for Global Inclusion and Social Development at UMass Boston, and director of ICI from 1993 to 2017, is hired as a research associate at Children's.
              </div>
            </li>
            <li>
              <div>
                <time>1972</time> Massachusetts Chapter 766 is passed, guaranteeing all children the right to a free, appropriate public education. It is the first USA special education law, and becomes the model for later federal legislation.
              </div>
            </li>
            <li>
              <div>
                <time>1976</time> The Children's Hospital Work Experience Program (WEP) begins. The WEP provides intensive training and supervision for young adults with disabilities who are placed in various departments at the hospital. This program continues today.
              </div>
            </li>
            <li>
              <div>
                <img src="img/wrentham.jpg" alt="Wrentham State School-devlopmental center" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1976</time> ICI receives a state contract for developing modern medical services at the Wrentham State School (now Wrentham Developmental Center), following a court ruling in a class action suit on behalf on the residents. The conditions at WSS are markedly improved.
              </div>
            </li>
            <li>
              <div>
                <time>1981-82</time> DEC receives supported work contract from Bay State Skills Corporation to provide job training, work experience, and job placement for people with disabilities.
              </div>
            </li>
            <li>
              <div>
                <time>1987</time> The DEC’s growing vocational rehabilitation team and employment researchers move to the Gardner House on the BCH campus. This unit becomes known as the Training and Research Institute for People with Disabilities (TRIPD).
              </div>
            </li>
            <li>
              <div>
                <time>1987</time> Staff from the Training and Research Institute for People with Disabilities (TRIPD) works with the Boston College Campus School to start the BC Supported Employment Program.
              </div>
            </li>
            <li>
              <div>
                <time>1984</time> ICI conducts its first national survey on day and employment services, fundeded by the Administration on Developmental Disabilities. Later named Access to Integrated Employment, this project continues today.
              </div>
            </li>
            <li>
              <div>
                <time>1990</time> The Training and Research Institute for People with Disabilities (TRIPD) establishes its first office at UMass Boston.
              </div>
            </li>
            <li>
              <div>
                <img src="img/ADA.jpg" alt="President George Bush signing the ADA" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>1990</time> The Americans with Disabilities Act (ADA) is passed.
              </div>
            </li>
            <li>
              <div>
                <time>1990</time> The Center for Autism and Related Disabilities opens at Children’s Hospital.
              </div>
            </li>
            <li>
              <div>
                <time>1992</time>The Training and Research Institute for People with Disabilities (TRIPD) is officially renamed the Institute for Community Inclusion (ICI).
              </div>
            </li>
            <li>
              <div>
                <time>1993</time> Bill Kiernan is appointed the director of ICI.
              </div>
            </li>
            <li>
              <div>
                <time>1993</time> ICI receives a federal grant to start its first Rehabilitation Research and Training Center, a 5-year project called the Center on Promoting Employment.
              </div>
            </li>
            <li>
              <div>
                <time>1996</time>Community capacity-building projects (13 total) are created to develop long-term partnerships with at least 29 diverse community-based organizations in Massachusetts.
              </div>
            </li>
            <li>
              <div>
                <time>1998</time> The Vision Rehabilitation Therapy program is funded. This program provides training and a graduate degree for professionals entering the field of Vision Studies, and will grow into the Vision Studies MEd at UMass Boston.
              </div>
            </li>
            <li>
              <div>
                <img src="img/AmeriCorps.jpg" alt="group of AmeriCorps members" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2000</time> The National Service Inclusion Project is created, providing training and technical assistance to support individuals with disabilities participating in AmeriCorps, Senior Corps, and service learning opportunities.
              </div>
            </li>
            <li>
              <div>
                <time>2001</time> The majority of ICI staff become UMass Boston employees.
              </div>
            </li>
            <li>
              <div>
                <time>2002</time>ICI receives the National Center on Workforce Development grant from the federal Office of Disability Employment Policy.
              </div>
            </li>
            <li>
              <div>
                <img src="img/parkplaza.jpg" alt="Boston Park plaza building" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2002</time> ICI moves to the Park Plaza Building in Boston’s Back Bay neighborhood.
              </div>
            </li>
            <li>
              <div>
                <time>2003</time> Think College is formally named, having grown from a 3-year grant from the federal Office of Special Education in 1997. The project focuses on improving access to higher education for young people with intellectual disabilities.
              </div>
            </li>
            <li>
              <div>
                <time>2005</time>The State Employment Leadership Network (SELN) is established. This organization provides a forum for state developmental disabilities agencies to collaborate and receive technical assistance around employment practices.
              </div>
            </li>
            <li>
              <div>
                <time>2007</time> ICI receives the first of multiple national research centers studying vocational rehabilitation, or VR. VR agencies support people with disabilities to find and keep jobs in their communities.
              </div>
            </li>
            <li>
              <div>
                <time>2009</time> ICI receives the $9 million Research and Technical Assistance Center on Vocational Rehabilitation, funded by the National Institute on Disability, Independent Living, and Rehabilitation Research, and begins to develop learning collaboratives among VR agencies.
              </div>
            </li>
            <li>
              <div>
                <img src="img/2010_06_Leon_Eisenberg_Award-Ludwik.jpg" alt="Dr. Ludwik Szymanski" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2010</time> To honor his lifetime achievement and advocacy, Dr. Ludwik Szymanski, the first Director of Psychiatry (1967) for what is now known as ICI, was selected as the first recipient of the Leon Eisenberg Award at Boston Children's Hospital.
              </div>
            </li>
            <li>
              <div>
                <time>2010</time> ICI’s National Service Inclusion Project is awarded the Engaging Veterans with Disabilities Initiative to support national service and volunteer programs to engage veterans with disabilities.
              </div>
            </li>
            <li>
              <div>
                <time>2010</time> ICI in partnership with Mathematica Policy Research is awarded a $16.8 million project from the Rehabilitation Services Administration, looking at ways to improve wages for people getting Social Security Disability Insurance.
              </div>
            </li>
            <li>
              <div>
                <img src="img/crocker200.jpg" alt="Allen Crocker" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2011</time> The founding director of the DEC, Dr. Allen Crocker, passes away at 85 years old.
              </div>
            </li>
            <li>
              <div>
                <time>2012</time> ICI launches ExploreVR, a web-based portal to a range of VR data for planning, evaluation, and decision-making.
              </div>
            </li>
            <li>
              <div>
                <time>2012</time> ICI receives the $3.25 million RRTC on Demand-Side Strategies, funded by the National Institute on Disability, Independent Living, and Rehabilitation Research.
              </div>
            </li>
            <li>
              <div>
                <img src="img/perkins agreement.jpg" alt="Dean Kiernan" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2012</time> The School for Global Inclusion and Social Development at UMass Boston is established, with Bill Kiernan as founding dean.
              </div>
            </li>
            <li>
              <div>
                <img src="img/TOMODACHI.jpg" alt="Japanese Students" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2012</time>In Japan, ICI creates several disability leadership training programs targeting Japanese youth with disabilities, as well as disability and career services professionals from Japanese universities.
              </div>
            </li>
            <li>
              <div>
                <img src="img/brett.jpg" alt="James T. Brett and Ashley Wolff" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2013</time>A UMass Boston gala raises $1.4M for the James T. Brett Chair in Disability and Workforce Development, to be based at the ICI.
              </div>
            </li>
            <li>
              <div>
                <img src="img/Corcoran Jennison building.jpg" alt="Corcoran Jennison Building" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2015</time> ICI moves to its current location at the Bayside Office Building, 150 Mt. Vernon Street, at Columbia Point in Dorchester, MA.
              </div>
            </li>
            <li>
              <div>
                <time>2015</time> ICI is awarded the $9 million Job-Driven VR Technical Assistance Center, funded by the Rehabilitation Services Administration.
              </div>
            </li>
            <li>
              <div>
                <img src="img/ADA_fellows.jpg" alt="ADA Fellowship students" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2016-2018</time> ICI, the Association of University Centers on Disabilities, and Humanity &amp; Inclusion win grants from the U.S. Department of State to bring professionals from Brazil, Kenya, Peru, Tanzania, and Uganda to the US for a 5-week intensive fellowship program.
              </div>
            </li>
            <li>
              <div>
                <img src="img/ExploreVR.jpg" alt="scene from vocational rehab conference" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2016-2018</time> ICI expands its vocational rehabilitation research, partnering with model demonstrations funded by the Rehabilitation Services Administration in Massachusetts, Maine, and Nebraska.
              </div>
            </li>
            <li>
              <div>
                <img src="img/TomSannicandroHeadshot.jpg" alt="Director Tom Sannicandro" className="img-fluid" style={{maxWidth: '200px'}} />
                <time>2017</time> Tom Sannicandro becomes the new ICI director.
              </div>
            </li>
            <li>
              <div>
                <time>2017</time> ICI receives a $600K field-initiated award from the National Institute on Disability, Independent Living, and Rehabilitation Research to study Progressive Employment, a strategy for helping people with disabilities enter the workforce.
              </div>
            </li>
          </ul>
        </section>
      );
    }
  });


export default timeLine
