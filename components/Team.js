import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTeamAndMembers } from '../api/merged';
import { useAuth } from '../utils/context/authContext';

export default function Team({ obj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisTeam = () => {
    if (window.confirm(`Delete ${obj.name}?`)) {
      deleteTeamAndMembers(obj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{obj.uid === user.uid ? '🌹' : '🥀'}</Card.Title>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Subtitle>{obj.public ? 'Public' : 'Private'}</Card.Subtitle>
        <Link passHref href={`/team/${obj.firebaseKey}`}>
          <Card.Link>View</Card.Link>
        </Link>
        <Link passHref href={`/team/edit/${obj.firebaseKey}`}>
          <Card.Link href="#">Edit</Card.Link>
        </Link>
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
    uid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

Team.defaultProps = {
  obj: {},
};
