import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ExternalLink from '../components/externalLink';

const Site: React.FC<PageProps> = ({ location }) => {
  const servicesToDevelop = [
    {
      name: 'React.js',
      url: 'https://ja.reactjs.org/',
      description: 'JavaScriptフレームワーク。関数型プログラミングが特徴的',
    },
    {
      name: 'Gatsby.js',
      url: 'https://www.gatsbyjs.com/',
      description:
        '上記を使用したSSG（静的サイトジェネレーター）。特にページ遷移の機能追加をしやすく、React Routerをそのまま使うより遥かに簡単',
    },
    {
      name: 'Gitpod',
      url: 'https://www.gitpod.io',
      description:
        'クラウドで開発環境を整えられるサービス。本サイトはローカルの開発環境は一切使わず、このサービス上のみでコーディングした',
    },
  ];

  const servicesToDeploy = [
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
      description:
        'GitHubにpushしたHTMLファイルをもとに、自動的にサイトを作成・公開するサービス。今回は使用しなかったが、独自ドメインで公開することも可能',
    },
  ];

  return (
    <Layout location={location}>
      <Seo title="Services which help me make this site" />
      <h1>本サイトの作成に使用したサービス</h1>
      <div>
        <p>
          原則的にすべてのサービスが無料で使えますが、いくつか制限があるものもあります。 （たとえば、
          <ExternalLink text="Gitpod" url="https://www.gitpod.io" />
          は無料ユーザーは月50時間しか使用できません）
        </p>
        <h3>開発で使用したもの</h3>
        JavaScriptフレームワーク・サイトジェネレータ・開発環境の構築手段
        <dl>
          {servicesToDevelop.map(({ name, url, description }) => (
            <>
              <dt>{url ? <ExternalLink text={name} url={url} /> : name}</dt>
              <dd>{description}</dd>
            </>
          ))}
        </dl>
        <h3>デプロイ時に使用したもの</h3>
        コード管理・サイト公開のために使用しているサービス
        <dl>
          {servicesToDeploy.map(({ name, url, description }) => (
            <>
              <dt>{url ? <ExternalLink text={name} url={url} /> : name}</dt>
              <dd>{description}</dd>
            </>
          ))}
        </dl>
      </div>
    </Layout>
  );
};

export default Site;
