import React from 'react';
import renderer from 'react-test-renderer';

import Table from '../table';

describe('Table', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Table columns={[]} data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const tree = renderer
      .create(
        <Table
          columns={[
            { Header: 'Col1', accessor: 'col1' },
            { Header: 'Col2', accessor: 'col2' },
          ]}
          data={[
            {
              col1: '1-col1',
              col2: '1-col2',
            },
            {
              col1: '2-col1',
              col2: '2-col2',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
