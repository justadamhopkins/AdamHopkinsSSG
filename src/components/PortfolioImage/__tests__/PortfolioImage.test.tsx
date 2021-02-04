import React from 'react'
import { screen, render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import { PortfolioImage } from '../PortfolioImage'

describe('PortfolioImage', () => {
  beforeAll(() => {
    const query = useStaticQuery as jest.MockedFunction<typeof useStaticQuery>
    query.mockReturnValue({
      file: {
        childImageSharp: {
          fluid: {
            base64: 'mock',
            aspectRatio: 0.7533333333333333,
            src: 'mock.jpg',
            srcSet: 'mock.jpg',
            sizes: 'mock.jpg'
          }
        }
      }
    })
  })
  test('renders PortfolioImage', () => {
    render(<PortfolioImage />)

    expect(screen.getByAltText('Photo of Adam Hopkins')).toBeTruthy()
  })
})
