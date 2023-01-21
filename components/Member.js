/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Member({ obj }) {
  const deleteThisAuthor = () => {
    console.warn('DELETE', obj.firebaseKey);
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={obj.image} alt={obj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{obj.name}</Card.Title>
          <Link href={`/member/edit/${obj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

Member.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    uid: PropTypes.string,

  }),
};

Member.defaultProps = {
  obj: {},
};
