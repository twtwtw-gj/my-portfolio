import * as React from 'react';

import ExternalLink from '../components/externalLink';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ProfilePage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Profile" />
    <h1>プロフィール</h1>
    <p>twtwtw-gjです。</p>
    <p>日本・東京・多摩地域に住んでいます</p>
    <br />
    <p>大学・大学院では数学を学んでおりました。特に代数学・数学基礎論・集合論あたりを専攻していました。</p>
  </Layout>
);

export default ProfilePage;
