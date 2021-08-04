// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Site: React.FC<PageProps> = () => {
  const data = [
    { name: <a href="https://github.com">GitHub</a>, description: <>git repositoryのホスティングサイト。コードへのリンクは<a href="https://github.com/twtwtw-gj/my-portfolio">こちら</a></> },
    {
      name: <a href="https://gitpod.io">Gitpod</a>,
      description: 'クラウドで開発環境を整えられるサービス',
    },
  ];

  return (
    <Layout>
      <Seo title="サイトの作成方法" />
      <h1>このサイトの作成方法</h1>
      <p>
        <p>本サイトの作成で使用したサービスをご紹介いたします。</p>
        <p>
          原則的にすべてのサービスが無料で使えますが、いくつか制限があるものもあります。
          （たとえば、Gitpodは無料ユーザーは月50時間しか使用できません）
        </p>
        <dl>
          {data.map(({ name, description }) => (
            <>
              <dt>{name}</dt>
              <dd>{description}</dd>
            </>
          ))}
        </dl>
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Site;
