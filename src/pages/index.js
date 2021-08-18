import * as React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Avatar from 'react-avatar';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <a href="https://github.com/twtwtw-gj/" rel="noopener noreferrer">
      <Avatar githubHandle="twtwtw-gj" alt="The GitHub avatar of twtwtw-gj" />
      <FontAwesomeIcon icon={faGithub} style={{ width: 24, height: 24 }} />
      Please check my works.
    </a>
    <br />
    <p>
      <Link to="/profile/">Go to profile</Link> <br />
      <Link to="/skill/">Go to skill sheet</Link> <br />
      <Link to="/site/">Go to the page how to make this site</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;
