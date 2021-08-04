// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Site: React.FC<PageProps> = () => {
  const data = [
    {
      name: <a href="https://ja.reactjs.org/">React.js</a>,
      description: 'JavaScriptフレームワーク。関数型プログラミングが特徴的',
    },
    {
      name: <a href="https://www.gatsbyjs.com/">Gatsby.js</a>,
      description: '上記を使用したSSG（静的サイトジェネレーター）',
    },
    {
      name: <a href="https://gitpod.io">Gitpod</a>,
      description:
        'クラウドで開発環境を整えられるサービス。本サイトはローカルの開発環境は一切使わず、このサービス上のみでコーディングした',
    },
    {
      name: <a href="https://github.com">GitHub</a>,
      description: (
        <>
          git repositoryのホスティングサイト。コードへのリンクは
          <a href="https://github.com/twtwtw-gj/my-portfolio">こちら</a>
        </>
      ),
    },
    {
      name: <a href="https://github.co.jp/features/actions">GitHub Actions</a>,
      description: 'GitHubにコードを上げると、自動的にテストや成果物のビルドを行うサービス',
    },
    {
      name: <a href="https://pages.github.com/">GitHub Pages</a>,
      description: 'GitHubにpushしたHTMLファイルをもとに、自動的にサイトを作成・公開するサービス',
    },
  ];

  return (
    <Layout>
      <Seo title="サイトの作成に使用したサービス" />
      <h1>本サイトの作成に使用したサービス</h1>
      <div>
        <p>
          原則的にすべてのサービスが無料で使えますが、いくつか制限があるものもあります。 （たとえば、{' '}
          <a href="https://gitpod.io">Gitpod</a>は無料ユーザーは月50時間しか使用できません）
        </p>
        <dl>
          {data.map(({ name, description }) => (
            <>
              <dt>{name}</dt>
              <dd>{description}</dd>
            </>
          ))}
        </dl>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Site;
