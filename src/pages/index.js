import * as React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <div>
      <a href="https://github.com/twtwtw-gj/">
        <FontAwesomeIcon icon={faGithub} style={{ width: 24, height: 24 }} />
        Please check my works.
      </a>
      <br />
    </div>
    <p>
      <Link to="/profile/">Go to profile</Link> <br />
      <Link to="/skill/">Go to skill sheet</Link> <br />
      <Link to="/site/">Go to the page how to make this site</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;
