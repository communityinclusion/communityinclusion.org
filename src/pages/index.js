import React from "react"
import styled from 'styled-components'
import Hero from "../components/hero"
import Layout from "../components/layout"
import cat from '../images/cat.jpeg'
import { graphql } from 'gatsby'

const StyledHero = styled(Hero)`
  max-width: 100%;
`

const IndexPage = ({data}) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>

    </StyledHero>
         <section className=" mt1 center bg-lightest-blue pa3 ph5-ns">
    <p className="f6 tl lh-copy">
     ICI recently celebrated its 50th anniversary as a University Center for Excellence in Developmental Disabilities (UCEDD), started by President Kennedy.
UCEDDs work with people with disabilities, members of their families, state and local government agencies, and community providers in projects that provide
training, technical assistance, service, research, and information sharing, with a focus on building the capacity of communities to sustain all their citizens.
    </p>
  </section>
<article className="cf">
  <div className="fl w-100-m w-70-ns bg-white pa3">

<section className="mw7 center">
  <h2 className="fw1 ph3 ph0-l">News</h2>
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
           <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 mt0 lh-title">#ICI50</h1>
          <p className="f6 f5-l lh-copy">
           The ICI recently celebrated 50 years of promoting inclusion through its research and training activities. To see a recap of our festivities, view an interactive historical timeline of the institute, and see videos of the ICI community speaking about Inclusion, visit our #ICI50 page.
          </p>

        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 mt0 lh-title">2019-20 Gopen and Crocker Fellowships</h1>
          <p className="f6 f5-l lh-copy">
          The application process is now open for the 2019-20 Gopen and Crocker Fellowships. The deadline to apply is Tuesday, April 23rd.
          </p>

        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
           <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 mt0 lh-title">CES ACRE Supplement Now Available</h1>
          <p className="f6 f5-l lh-copy">
        Offered through Direct Course, the College of Employment Services (CES) curriculum can help your staff advance their careers as employment professionals. Now they can access even more intensive career development, through the CES ACRE Supplement offered by the Institute for Community at the University of Massachusetts Boston.
          </p>

        </div>
      </div>
    </a>
  </article>
</section>



  </div>
  <div className="fl w-100-m w-25-ns tc pa3 mt4 bg-dark-blue ">
    
<a className="twitter-timeline" data-height="700" href="https://twitter.com/ICInclusion?ref_src=twsrc%5Etfw">Tweets by ICInclusion</a>
 </div>
</article>  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    hero: allImageSharp(filter:{original:{src:{regex:"/umbcampus/"}}}) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
