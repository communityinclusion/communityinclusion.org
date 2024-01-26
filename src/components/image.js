import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <useStaticQuery
    query={graphql`{
  heroImage: file(relativePath: {eq: "jfk-hero-image.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
}
`}
    render={data => 
      <GatsbyImage image={getImage(data.heroImage.childImageSharp.gatsbyImageData)} alt="JFK" />
    }
  />
)
export default Image
