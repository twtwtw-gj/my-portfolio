import * as React from 'react';
import { graphql } from 'gatsby';
import { DateTime } from 'luxon';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Table from '../components/table';

const SkillPage = ({
  data: {
    site: { buildTime },
  },
}) => {
  return (
    <Layout>
      <Seo title="Skill" />
      <h2>今まで習得した言語</h2>
      <Table
        columns={[
          { Header: '言語名', accessor: 'name' },
          { Header: '説明', accessor: 'description' },
        ]}
        data={[
          {
            name: 'C',
            description: '最初に習得した言語',
          },
          {
            name: 'Python',
            description: '軽いスクリプトを書くときによく使う言語',
          },
          {
            name: 'Ruby',
            description: '動かしていて楽しい言語',
          },
          {
            name: 'Perl',
            description:
              '決して嫌いというわけではないが、あまりimmutableなコード執筆がしにくいことがあり、よいスクリプトを組む自信がいまひとつない',
          },
          {
            name: 'Haskell',
            description:
              'もともと数学よりの言語なので勉強していて困りはしなかった。ラムダ計算を模した記法は非常に気に入っている',
          },
          {
            name: 'Java',
            description:
              '業務でよく使う言語。Spring bootフレームワークはパッケージひとつで色々なことが出来るので気に入っている',
          },
          {
            name: 'JavaScript',
            description: 'Vue.js, React.js, Node.jsでのサーバー立ち上げなら出来る',
          },
          {
            name: 'Lisp',
            description: 'Scheme/Gaucheの勉強を継続中',
          },
        ]}
      />
      <h2>現在興味を持っている分野</h2>
      <Table
        columns={[
          { Header: '技術', accessor: 'name' },
          { Header: '説明', accessor: 'description' },
        ]}
        data={[
          {
            name: '自動定理証明・証明支援システム',
            description: 'jsCoqを使ってCoq勉強中',
          },
          {
            name: <a href="https://kubernetes.io/">kubernetes(k8s)</a>,
            description:
              'マイクロサービスシステム自体には開発に携わったことがあったが、複数のサーバーを逐一置き換えるのは非常に煩雑だった。オーケストレーションの使用である程度デプロイ作業がラクになるのではと期待している',
          },
        ]}
      />
      <dev>最終更新時刻: {DateTime.fromISO(buildTime).toFormat('yyyy/MM/dd HH:mm:ss z')}</dev>
    </Layout>
  );
};

export default SkillPage;

export const query = graphql`
  query BuildTimeQuery {
    site {
      buildTime
    }
  }
`;
