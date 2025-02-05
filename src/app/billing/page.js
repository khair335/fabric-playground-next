"use client"
import React from 'react';
import billingData from './Billing.json';
import Table from '@/components/ui/Table/Table';
import PageTitle from '@/components/ui/PageTitle';
import Button from '@/components/ui/Button';
import { FiDownload } from 'react-icons/fi';

const columns = [
  { key: 'date', label: 'Date' },
  { key: 'method', label: 'Payment Method' },
  { key: 'subscription', label: 'Subscription' },
  { key: 'amount', label: 'Amount' },
  {
    key: 'action',
    label: 'Action',
    width: '200px',
    render: (row) => (
      <Button
        mode="button"
        variant="Tertiary"
        size="Small"
        iconPosition="left"
        icon={<FiDownload />}
        className='!gap-1'
      >

        Download invoice
      </Button>
    ),
  },
];

const Billing = () => {
  const handleRowSelect = (selectedRows) => {
    console.log('Selected Rows:', selectedRows);
  };

  const handleSort = (sortedData) => {
    console.log('Sorted Data:', sortedData);
  };

  return (
    <div className="max-w-8xl mx-auto w-full px-4 py-12">
      <PageTitle title="Billing History" />
      <Table
        data={billingData}
        columns={columns}
        rowsPerPageOptions={[5, 10, 15]}
        defaultRowsPerPage={5}
        onRowSelect={handleRowSelect}
        onSort={handleSort}
        paginationPosition="both" // Show pagination at both top and bottom
        sortByLabel="Sort by:" // Custom label for sorting
        rowsPerPageLabel="Rows per page:" // Custom label for rows per page
      />

    </div>
  );
};

export default Billing;
