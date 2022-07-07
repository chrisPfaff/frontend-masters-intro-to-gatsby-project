import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            description
            date(fromNow: true)
            title
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1>h1</h1>
      <Link to="https://www.google.com" target="_blank">
        Google
      </Link>
      <h2>Check out the blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title} </Link>{' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
