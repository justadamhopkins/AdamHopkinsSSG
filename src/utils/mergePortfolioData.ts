export const mergePortfolioData = (portfolios: any, images: any) => {
  return portfolios.reduce((acc: any, portfolio: any) => {
    const portfolioImage = images.allImageSharp.nodes.find((image: any) => {
      return image.fluid.originalName.includes(portfolio.id)
    })

    return [...acc, { ...portfolio, ...portfolioImage }]
  }, [])
}
