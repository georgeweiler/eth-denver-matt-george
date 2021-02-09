import React from 'react';
import { Table, Button } from 'react-bootstrap';

const uploadData = [
  { num: 1, title: 'Upload 1', date: 'Jan 2, 2021', views: 100, likes: 89 },
  { num: 2, title: 'Upload 2', date: 'Jan 31, 2021', views: 195, likes: 95 },
  { num: 3, title: 'Upload 3', date: 'Feb 2, 2021', views: 250, likes: 150 },
  { num: 4, title: 'Upload 4', date: 'Feb 9, 2021', views: 123, likes: 123 },
];

const Uploads = () => (
  <>
    <h1 className="mb-4">Uploads</h1>
    <Button variant="primary" className="mb-4">
      New Upload
    </Button>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Uploads</th>
          <th>Date</th>
          <th>Views</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>
        {uploadData.map(({ num, title, date, views, likes }) => (
          <tr key={num}>
            <td>{num}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>{views}</td>
            <td>{likes}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default Uploads;
