import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Arrow = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      style={{ width: `24px`, height: `24px` }}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Arrow"
    />
  )
}

export default Arrow
