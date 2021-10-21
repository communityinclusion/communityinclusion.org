import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import arizona_thumbnail from '../images/pub-thumbs/Arizona_thumbnail.png'
import evr_thumbnail from '../images/pub-thumbs/EVR_toolkit.png'
import FF20_thumbnail from '../images/pub-thumbs/FF20_thumbnail.png'
import HowTo1_thumbnail from '../images/pub-thumbs/HowTo1_thumbnail.png'
import HowTo6_thumbnail from '../images/pub-thumbs/HowTo6_thumbnail.png'
import innovativeAT_thumbnail from '../images/pub-thumbs/innovativeAT.png'
import Insight41_thumbnail from '../images/pub-thumbs/Insight41_thumbnail.png'
import SELN_guidance_thumbnail from '../images/pub-thumbs/SELN_guidance_thumbnail.png'
import SD_thumbnail from '../images/pub-thumbs/SD_thumbnail.png'
import SELN_submin_thumbnail from '../images/pub-thumbs/SELN_submin_thumbnail.png'
import TC_annnual_thumbnail from '../images/pub-thumbs/TC_annnual_thumbnail.png'
import TCTP1_thumbnail from '../images/pub-thumbs/TCTP1_thumbnail.png'
import SELN_unpaid_work_thumbnail from '../images/pub-thumbs/SELN_unpaid_work_thumbnail.png'
import cle_toolkit_thumbnail from '../images/pub-thumbs/cle_toolkit_thumbnail.png'

import depression_thumbnail from '../images/pub-thumbs/depression_DS_F2-1-thumb.png'
import adhd_thumbnail from '../images/pub-thumbs/ADHD_F_web-1-thumb.png'
import communications_thumbnail from '../images/pub-thumbs/communications-booklet_2016-update-1-thumb.png'
import ds_brochure_thumbnail from '../images/pub-thumbs/DS-brochure_2014_web_F-1-thumb.png'
import literacy_infants_thumbnail from '../images/pub-thumbs/literacy_infants_F-thumb.png'
import literacy_youngchild_thumbnail from '../images/pub-thumbs/literacy_youngchild_F-thumb.png'
import literacy_schoolage_thumbnail from '../images/pub-thumbs/literacy_schoolage_F-thumb.png'
import literacy_teens_thumbnail from '../images/pub-thumbs/literacy_teens_F-thumb.png'


import depression_pdf from '../files/depression_DS_F2.pdf'
import adhd_pdf from '../files/ADHD_F_web.pdf'
import communications_pdf from '../files/communications_booklet_2016_update.pdf'
import ds_brochure_pdf from '../files/DS_brochure_2014_web_F.pdf'
import literacy_infants_pdf from '../files/literacy_infants_F.pdf'
import literacy_youngchild_pdf from '../files/literacy_youngchild_F.pdf'
import literacy_schoolage_pdf from '../files/literacy_schoolage_F.pdf'
import literacy_teens_pdf from '../files/literacy_teens_F.pdf'

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


// export default function = ({ pageContext, location }) => {
// const {
// breadcrumb: { crumbs },
// } = pageContext

class PublicationsPage extends React.Component {
  render() {
    const { pageContext, location} = this.props;
 //   const data = this.props.data.allPubsXlsxSheet1.edges
    const { breadcrumb: { crumbs }, } = pageContext
    return ( 
      <Layout location={location}>
        <Seo title="ICI Publications" />
        <section className="main-content">
            <div className="breadcrumbs">
    <Breadcrumb
            location={location}
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel="Publications"
          />
          </div>
       <div className="w-100 pa2">
       <h1 className="page-title">ICI Publications</h1>


       

       <div className="w-100 nl2 nr2 center" id="pubs">
         <p>The ICI publishes briefs, whitepapers, and more extensive reports for a wide range of audiences, such as employment services providers, people with disabilities, and school/college staff providing support for students with disabilities. Selected publications are highlighted here.</p>

         <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Education
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
             
                <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
    <div className="card-image">
    <img src={HowTo1_thumbnail}   className="img-fluid"  alt = "publication thumbnail"/>
    </div>
    </div>  
    <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="https://thinkcollege.net/sites/default/files/files/resources/Conducting_College_Search_HTTC1v2.pdf">Conducting a College Search: Questions to Ask College Programs</a></h2>
   <p className="card-text">Conducting a college search is a daunting task for every family and every potential college student. For students with intellectual disability (ID), there are some additional aspects to consider beyond the details you can learn in Think College Search. This resource provides questions, suggested by parents and students who have been through the college search process.</p>
</div>
 </div>
 </div>

 <div className="card m-3">
                <div className="row">
         <div className="col-md-2">
         <div className="card-image">
         <img src={HowTo6_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"> <a href="https://thinkcollege.net/sites/default/files/files/resources/Voices_of_Experience_Students_HTTC6.pdf">Voices of Experience: Students Share College Search Advice</a>  </h2>
   <p className="card-text">We asked 5 former college students what you (and your family) should think about as you start your own college journey. Meet the students here, and keep reading to find out what they wanted you to know!</p>
 </div>
</div>
</div>
      <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={Insight41_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="https://thinkcollege.net/sites/default/files/files/resources/IB41_Consider_the_Alternatives_2019.pdf">Consider the Alternatives: Decision-Making Options for Young Adults with Intellectual Disabilities</a>  </h2>
    <p className="card-text">As youth with intellectual and developmental disabilities (IDD) are making plans to attend college, it is more important than ever that families become fully informed about guardianship as well as less-limiting alternatives. This brief  defines some of  the options and possible ramifications. It also presents special circumstances for consideration, and suggests ways to promote self-determination no matter which option is chosen.</p>
 </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={FF20_thumbnail}   className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="https://thinkcollege.net/sites/default/files/files/resources/FF20_Provision_of_Pre-ETS_in_TPSIDs.pdf">Provision of Pre-Employment Transition Services in TPSID Programs</a>  </h2>
    <p className="card-text">This Fast Fact describes ways that Transition Postsecondary Programs for Students with Intellectual Disabilities (TPSID programs) engage with state vocational rehabilitation agencies to provide pre-employment transition services to students with intellectual disability enrolled in colleges and universities.</p>
    </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={TCTP1_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="https://thinkcollege.net/sites/default/files/files/resources/1%20Supporting%20Life%20Skills%20Development%20During%20a%20Typical%20College%20Day.pdf">Supporting Life Skills Development</a>  </h2>
   <p className="card-text">Students who receive transition services and attend college have many opportunities throughout the day to develop and use life skills. In fact, the more students stay on campus, the more opportunities they have to use these skills in natural contexts and with natural cues.</p>

 </div>
 </div>       </div>
 <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
               <div className="card-image">
               <img src={TC_annnual_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
               </div>
               </div>
               <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="https://thinkcollege.net/sites/default/files/files/resources/TC%20reports_%20YEAR4_2019_F2.pdf">Think College TPSID annual report</a></h2>
    <p className="card-text">This report provides an overview of descriptive program and student-level data provided by TPSIDs during the 2018–2019 academic year. Program data includes program characteristics, academic access, supports for students, and integration of the program within the IHE during the fourth year of the 2015–2020 funding. Student data includes student demographics, course enrollments, employment activities, and engagement in student life. This report also provides information on the strategic partnerships and financial sustainability of TPSID programs. Additionally, the report provides trends over time as well as descriptive data on the outcomes of students who exited TPSID programs in previous years.</p>

 </div>
 </div>
         </div>
         
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Health Care
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
    <div className="card-image">
    <img src={adhd_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
    </div>
    </div>
    <div className="col-md-10 card-body">
   <h2 className="card-title"><a href={adhd_pdf}>ADHD: Practical Tips for Parents</a></h2>
   <p className="card-text">This short, accessible guide offers tips to parents around navigating their child’s Attention Deficit Hyperactivity Disorder.</p>
</div>
</div>
</div>

<div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={communications_thumbnail}   className="img-fluid" alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"> <a href={communications_pdf}>Early Communication Development & Down Syndrome</a>  </h2>
   <p className="card-text">This guide informs parents about how Down syndrome can affect communication, and actions they can take to support their child.</p>
 </div>
 </div>
         </div>

         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={depression_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href={depression_pdf}>Consider the Depression & Down Syndrome</a>  </h2>
    <p className="card-text">This brochure shares tips for family members about identifying depression and supporting the mental health of their loved one with Down syndrome.</p>
 </div>
 </div>
         </div>

        <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={ds_brochure_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href={ds_brochure_pdf}>Behavior and Down Syndrome: A Practical Guide for Parents</a>  </h2>
    <p className="card-text">This publication supports parents in understanding and responding to behavioral issues of their child with Down syndrome.</p>
 </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={literacy_infants_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"><a href={literacy_infants_pdf}>Building Literacy Skills from Infancy to Adulthood: Infants & Toddlers</a>  </h2>
   <p className="card-text">This one-pager offers research-supported tips for building literacy skills with children from birth to age 2.</p>
 </div>
 </div>
               </div>

               <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
               <div className="card-image">
               <img src={literacy_youngchild_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
               </div>
               </div>
               <div className="col-md-10 card-body">
    <h2 className="card-title"><a href={literacy_youngchild_pdf}>Building Literacy Skills from Infancy to Adulthood: Young Children</a></h2>
    <p className="card-text">This one-pager offers research-supported tips for building literacy skills with pre-school-age children.</p>
 </div>
 </div>
         </div>
 

 <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
               <div className="card-image">
               <img src={literacy_schoolage_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
               </div>
               </div>
               <div className="col-md-10 card-body">
    <h2 className="card-title"><a href={literacy_schoolage_pdf}>Building Literacy Skills from Infancy to Adulthood: School-age Children</a></h2>
    <p className="card-text">This one-pager offers research-supported tips for building literacy skills with children from Grade 1 through the pre-teen years.</p>
 </div>
 </div>
         </div>
         
  

         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
               <div className="card-image">
               <img src={literacy_teens_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
               </div>
               </div>
               <div className="col-md-10 card-body">
    <h2 className="card-title"><a href={literacy_teens_pdf}>Building Literacy Skills from Infancy to Adulthood: Teens and Beyond</a></h2>
    <p className="card-text">This one-pager offers research-supported tips for building literacy skills with adolescents.</p>
 </div>
 </div>
         </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Employment
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
    <div className="card-image">
    <img src={arizona_thumbnail}  className="img-fluid" alt = "publication thumbnail" />
    </div>
    </div>
    <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="https://www.thinkwork.org/power-disability-employment-impact-arizonas-economy">The Power of Disability Employment: The Impact to Arizona’s Economy</a></h2>
    <p className="card-text">The Arizona Developmental Disabilities Planning Council (ADDPC) contracted with the Institute for Community Inclusion (ICI) at the University of Massachusetts Boston to explore the economic impacts for Arizona of increasing the employment of individuals with disabilities and to analyze how the state can improve its efforts.</p>
</div>
</div>

</div>


<div className="card m-3">
                <div className="row">
    <div className="col-md-2">
    <div className="card-image">
   <img src={SD_thumbnail}  className="img-fluid" alt = "publication thumbnail" />
   </div>
   </div>
   <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="https://www.thinkwork.org/sites/default/files/files/bluebook2019_Final.pdf">StateData: The National Report on Employment Services and Outcomes Through 2017</a></h2>
    <p className="card-text">Access the latest information about employment and economic self-sufficiency for people with intellectual and developmental disabilities. Both national and state-level statistics are included.</p>
</div>
</div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={SELN_submin_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="http://static.smallworldlabs.com/umass/content/seln/Public%20Docs/seln_wioa-sect-511_f_2-2017_comp.pdf">New Restrictions on Subminimum Wage Under WIOA: Requirements and Opportunities for State IDD Agencies</a></h2>
   <p className="card-text">This brief provides details on Section 511 implementation, and then discusses potential roles for state IDD agencies.</p>
 </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={SELN_unpaid_work_thumbnail}  className="img-fluid"  alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="http://static.smallworldlabs.com/umass/content/Public%20Docs/SELN%20Unpaid%20Work%20-%202019.pdf">Unpaid Work Experiences, Volunteering, and Internships: What’s Allowed.</a></h2>
    <p className="card-text">As SELN member states refine how employment services are defined, implemented, and reimbursed, questions arise about how to view certain work experiences, and how to strategically use volunteer opportunities and unpaid work options.</p>
 </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={SELN_guidance_thumbnail}  className="img-fluid"   alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
    <h2 className="card-title"><a href="http://static.smallworldlabs.com/umass/content/SELN-guidance-jan-2019.pdf">The SELN Guidance for Conversations: Identifying and designing pathways towards rewarding employment</a></h2>
    <p className="card-text">This publication describes a series of pathways that we feel reflect most people’s current circumstances and understanding. Each pathway is defined and questions for exploration and discovery are provided.</p>
 </div>
 </div>
         </div>
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={evr_thumbnail} className="img-fluid" alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="https://www.explorevr.org/toolkits">Explore VR Job Driven Toolkits</a></h2>
<p>The Job-Driven Toolkits provide resources on promising and emerging job-driven strategies for vocational rehabilitation (VR) agencies and partners. The toolkits help embed and sustain job-driven VR practices that lead to improved employment outcomes for people with disabilities.</p>
</div>
 </div>
         </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Community
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
    <div className="card-image">
    <img src={innovativeAT_thumbnail}  className="img-fluid"  alt = "publication thumbnail" />
    </div>
    </div>
    <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="https://catada.info/assets/files/innovativeAT_issue1_Final%20Accessible.pdf">Innovative AT Practices, ISSUE NO. 1 • OCTOBER 2019</a></h2>
<p className="card-text"><strong>Mobile Unit Brings Assistive Tech to Underserved Areas.</strong> The mobile unit has been described as a “warehouse on wheels” by iCAN’s program manager, Rick Anderson. Two program coordinators rotate monthly to drive the van to a predetermined area and set up shop for the day. Once there, they provide device loans, demonstrations of high-end AT devices (such as communication tools), and giveaways of limited reused AT devices. </p>
</div>
</div>
         </div>
       
        
    
        
    
        
         <div className="card m-3">
                <div className="row">
    <div className="col-md-2">
         <div className="card-image">
         <img src={cle_toolkit_thumbnail}  className="img-fluid" alt = "publication thumbnail"/>
         </div>
         </div>
         <div className="col-md-10 card-body">
   <h2 className="card-title"><a href="https://www.thinkwork.org/CLE-toolkit">Community Life Engagement toolkit</a></h2>
   <p className="card-text">Looking to increase community life engagement of the people you support? Not sure where to begin? This toolkit was developed to help service providers develop and improve high quality supports for community life engagement (CLE). Inside you will find guideposts for success, a self-assessment tool, real-world examples of service providers making CLE happen, and other helpful resources and tools.</p>
   </div>
 </div>
         </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>


      

  
 

</div>







       
{/* 
          <div >
            {data.map((row) => (
              <ul key={row.node.id} className="bb list">
                <li className="pv2 ph3"><a href={`${row.node.download_url}`}>{row.node.title}</a></li>
                <li className="pv2 ph3">Author(s): {row.node.authors}</li>
                </ul>
            ))}

</div>
        */}
        </div>

        <p>To view additional ICI publications, please visit <a href="https://scholarworks.umb.edu/ici/">Scholarworks</a></p>
      </section>
  </Layout>
    )
  }
}

export default PublicationsPage

export const IndexQuery = graphql`
query  {
  allFile(filter: {extension: {eq: "pdf"}}) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`
