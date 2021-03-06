export const mergePortfolioData = (portfolios, images) => {
  return portfolios.reduce((acc, portfolio) => {
    const portfolioImage = images.allImageSharp.nodes.find(image => {
      return image.fluid.originalName.includes(portfolio.id)
    })

    console.log(portfolioImage, 'portfolioImage')

    return [...acc, { ...portfolio, ...portfolioImage }]
  }, [])
}
