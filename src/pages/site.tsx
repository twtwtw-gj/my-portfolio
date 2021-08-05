import * as React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ExternalLink from '../components/externalLink';

const Site: React.FC<PageProps> = () => {
  const data = [
    {
      name: 'React.js',
      url: 'https://ja.reactjs.org/',
      description: 'JavaScriptフレームワーク。関数型プログラミングが特徴的',
    },
    {
      name: 'Gatsby.js',
      url: 'https://www.gatsbyjs.com/',
      description: '上記を使用したSSG（静的サイトジェネレーター）',
    },
    {
      name: 'Gitpod',
      url: 'https://www.gitpod.io',
      description:
        'クラウドで開発環境を整えられるサービス。本サイトはローカルの開発環境は一切使わず、このサービス上のみでコーディングした',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      description: (
        <>
          git repositoryのホスティングサイト。コードへのリンクは
          <a href="https://github.com/twtwtw-gj/my-portfolio">こちら</a>
        </>
      ),
    },
    {
      name: 'GitHub Actions',
      url: 'https://github.co.jp/features/actions',
      description: 'GitHubにコードを上げると、自動的にテストや成果物のビルドを行うサービス',
    },
    {
      name: 'GitHub Pages',
      url: 'https://pages.github.com/',
      description: 'GitHubにpushしたHTMLファイルをもとに、自動的にサイトを作成・公開するサービス',
    },
  ];

  return (
    <Layout>
      <Seo title="サイトの作成に使用したサービス" />
      <h1>本サイトの作成に使用したサービス</h1>
      <div>
        <p>
          原則的にすべてのサービスが無料で使えますが、いくつか制限があるものもあります。 （たとえば、
          {ExternalLink({ text: 'Gitpod', url: 'https://www.gitpod.io' })}は無料ユーザーは月50時間しか使用できません）
        </p>
        <dl>
          {data.map(({ name, url, description }) => (
            <>
              <dt>{url ? ExternalLink({ text: name, url }) : name}</dt>
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
