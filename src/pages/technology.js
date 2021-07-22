import * as React from "react"

import { useTable } from 'react-table';

import Layout from "../components/layout"
import Seo from "../components/seo"

const TechPage = () => {
  
  const data = React.useMemo(
    () => [
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
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: '言語名',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: '説明',
        accessor: 'description',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Layout>
      <Seo title="使用技術" />
      <h1>今まで習得した言語</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default TechPage;
