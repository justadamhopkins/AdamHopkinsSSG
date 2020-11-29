import React, { FC } from 'react'
import { Link } from 'gatsby'

const HomePage: FC<{}> = ({ data }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong>{' '}
        site.
      </p>
      <p>Now go build something great.</p>
      <Link to='/page-2/'>Go to page 2</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default HomePage
