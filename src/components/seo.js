import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//
// NOTE: intentionally does not use react-helmet (or any similar library).
// Gatsby's Head API renders each page's <head> in its own isolated tree at
// build time; react-helmet collects tags via a mutable module-level
// singleton, which is not reset between pages in the same build worker.
// Mixing the two causes one page's title/og/twitter tags to leak onto
// another page's static HTML. Returning plain elements here lets Gatsby
// scope the output correctly per page.

const Head = ({ title, description, image, type, publishedTime, modifiedTime, tags }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
            author
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    author,
  } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const isArticle = type === 'article';

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      {/* Canonical <link> is injected site-wide by gatsby-plugin-canonical-urls; adding one here would duplicate it. */}

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaultTitle} />

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {isArticle && author && <meta property="article:author" content={author} />}
      {isArticle &&
        tags &&
        tags.map((tag) => <meta property="article:tag" content={tag} key={tag} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
  type: 'website',
  publishedTime: null,
  modifiedTime: null,
  tags: null,
};
