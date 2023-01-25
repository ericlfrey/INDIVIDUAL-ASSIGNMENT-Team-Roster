import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTeamAndMembers } from '../api/merged';

export default function Team({ obj, onUpdate }) {
  const deleteThisTeam = () => {
    if (window.confirm(`Delete ${obj.name}?`)) {
      deleteTeamAndMembers(obj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

        <Link passHref href={`/team/${obj.firebaseKey}`}>
          <Card.Link>View</Card.Link>
        </Link>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#" onClick={deleteThisTeam}>Delete</Card.Link>
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
  onUpdate: PropTypes.func.isRequired,
};

Team.defaultProps = {
  obj: {},
};
