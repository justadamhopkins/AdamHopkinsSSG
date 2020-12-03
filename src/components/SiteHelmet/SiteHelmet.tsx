import { useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  location?: {
    href: string
  }
  pageTitle: string
  image?: string
}

export const SiteHelmet: FC<Props> = ({
  location,
  pageTitle,
  image = '/logo.svg'
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang='en' />
      <title>{pageTitle}</title>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='alternate icon' href='/favicon.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={site.siteMetadata.description} />
      {location && <meta property='og:url' content={location.href} />}
      <meta property='og:image' content={image} />
      <meta property='og:title' content={pageTitle} key='ogtitle' />
      <meta
        property='og:site_name'
        content={site.siteMetadata.title}
        key='ogsitename'
      />
      <meta
        property='og:description'
        content={site.siteMetadata.description}
        key='ogdesc'
      />
    </Helmet>
  )
}
