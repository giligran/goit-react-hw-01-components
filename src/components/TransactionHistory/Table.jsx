const tableApp = {
  columns: [
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: (a, b) => b.type.localeCompare(a.type),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: (a, b) => b.type.localeCompare(a.type),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      sorter: (a, b) => b.type.localeCompare(a.type),
      sortDirections: ['ascend', 'descend'],
    },
  ],
  onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  },
};

export default tableApp;
