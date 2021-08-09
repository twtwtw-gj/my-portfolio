import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ProfilePage = ({ location }) => (
  <Layout location={location}>
    <Seo title="profile" />
    <h1>プロフィール</h1>
    <p>twtwtw-gjです。</p>
    <p>日本・東京・多摩地域に住んでいます</p>
    <p>その関係で、東京都のCovid19対策サイトの開発作業もちょくちょく見学させていただいております。</p>
    <br />
    <p>大学・大学院では数学を学んでおりました。特に代数学・数学基礎論・集合論あたりを専攻していました。</p>
    <p>数学（数学基礎論・数理論理学）・プログラミング言語・ソフトウェア開発に興味を持っています。</p>
  </Layout>
);

export default ProfilePage;
