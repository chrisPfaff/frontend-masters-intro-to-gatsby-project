import * as React from 'react';
import { Link } from 'gatsby';
import Layout  from "../components/layout.js"

export default function IndexPage() {
  return (
    <Layout>
        <h1>h1</h1>
        <Link to="https://www.google.com" target="_blank">Google</Link>
    </Layout>
  );
}
