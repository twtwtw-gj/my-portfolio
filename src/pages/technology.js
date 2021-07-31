import * as React from 'react';
import { graphql } from 'gatsby';
import { DateTime } from 'luxon';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Table from '../components/table';

const TechPage = ({
  data: {
    site: { buildTime },
  },
}) => {
  const language = [
    {
      name: 'C',
      description: '最初に習得した言語',
    },
    {
      name: 'Ruby',
      description: '動かしていて楽しい言語',
    },
    {
      name: 'Python',
      description: '軽いスクリプトを書くときによく使う言語',
    },
    {
      name: 'Java',
      description: '業務でよく使う言語',
    },
    {
      name: 'Haskell',
      description:
        'もともと数学よりの言語なので勉強していて困りはしなかった。また、これの学習によって圏論に興味を持った',
    },
    {
      name: 'Lisp',
      description: 'Scheme/Gaucheの勉強を継続中',
    },
  ];

  // accessor is the "key" in the data
  const columns = [
    { Header: '言語名', accessor: 'name' },
    { Header: '説明', accessor: 'description' },
  ];

  return (
    <Layout>
      <Seo title="使用技術" />
      <h1>今まで習得した言語</h1>
      <Table columns={columns} data={language} />
      <dev>
        最終更新時刻:
        {DateTime.fromISO(buildTime).toFormat('yyyy-MM-dd HH:mm:ss z')}
      </dev>
    </Layout>
  );
};

export default TechPage;

export const query = graphql`
  query BuildTimeQuery {
    site {
      buildTime
    }
  }
`;
