import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"



export function Hero() {
  return (
    <div className="bg-light my-2" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      {/* <StaticImage
        className="heroImage"
        style={{
          gridArea: "1/1",
          maxHeight: 600,
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"umbcampus.png"}
        formats={["auto", "webp", "avif"]}
      /> */}
      <div className="heroText"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid"
        }}
      >
        {/* Any content here will be centered in the component */}
        <p className="mx-4 mt-4">
     Work is a critical part of helping people with disabilities be independent. At the ICI, we believe in employment. People with disabilities who work are more likely to be economically self-sufficient than those who are unemployed.</p>


 <p className="mx-4 ">
Postsecondary education impacts employment for people with disabilities. People with an intellectual disability who continue their education after high school are more likely to be employed, earn more money, and contribute more to the economy.
          
          
       </p>
      </div>
    </div>
  )
}

export default Hero;
