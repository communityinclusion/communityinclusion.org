import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"



export function Hero() {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
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
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"umbcampus.png"}
        formats={["auto", "webp", "avif"]}
      />
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
        <p>The Institute for Community Inclusion (ICI) at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society. As practitioners, researchers, and teachers, we form partnerships with individuals, families, community organizations, and service agencies. Together, we advocate for personal choice, self-determination, and social and economic justice. </p>
      </div>
    </div>
  )
}

export default Hero;