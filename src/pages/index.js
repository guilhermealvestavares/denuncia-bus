import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Search textColor="red" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      Clique aqui
    </Search>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
