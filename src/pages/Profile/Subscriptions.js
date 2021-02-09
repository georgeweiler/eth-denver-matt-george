import React from 'react';
import { Table } from 'react-bootstrap';

const subscriptionData = [
  { num: 1, title: 'Subscription 1', amount: 5, date: 'Jan 2, 2021' },
  { num: 2, title: 'Subscription 2', amount: 10, date: 'Jan 31, 2021' },
  { num: 3, title: 'Subscription 3', amount: 15, date: 'Feb 2, 2021' },
  { num: 4, title: 'Subscription 4', amount: 5, date: 'Feb 9, 2021' },
];

const Subscriptions = () => (
  <>
    <h1 className="mb-4">Subscriptions</h1>
    <p>
      To edit/delete your subscriptions, please visit{' '}
      <a href="https://app.superfluid.finance/">SuperFluid</a>.
    </p>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Channel Name</th>
          <th>dai/month</th>
          <th>Date started</th>
        </tr>
      </thead>
      <tbody>
        {subscriptionData.map(({ num, title, amount, date }) => (
          <tr key={num}>
            <td>{num}</td>
            <td>{title}</td>
            <td>{amount}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default Subscriptions;
