import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Team({ obj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Link passHref href={`/team/${obj.firebaseKey}`}>
          <Card.Link>View</Card.Link>
        </Link>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

Team.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    public: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

Team.defaultProps = {
  obj: {},
};
