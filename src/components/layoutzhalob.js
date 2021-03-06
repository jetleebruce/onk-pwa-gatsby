/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Headerzhalob from "./Headerzhalob/index"
import "./layout.css"

const Layoutzhalob = ({ children }) => {
  return (
    <>
      <Headerzhalob />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

Layoutzhalob.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layoutzhalob
