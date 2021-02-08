import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { breakpoint } from '../../styles/ui/breakpoints'

const StyledPortfolioWrapper = styled.div`
  min-width: 300px;
  max-height: 300px;
  border-radius: 1000px;
  overflow: hidden;
  vertical-align: middle;
  border: 7px solid var(--secondaryBackground);
  width: 100%;
  ${breakpoint.sm`
      min-width: 350px;
      max-height: 350px;
  `};
`

export const PortfolioImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AdamGreyScaleSmall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledPortfolioWrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='Photo of Adam Hopkins'
      />
    </StyledPortfolioWrapper>
  )
}
