/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleMember } from '../api/members';
import { getSingleTeam } from '../api/teams';

export default function Member({ obj, onUpdate }) {
  const [team, setTeam] = useState({});

  useEffect(() => {
    getSingleTeam(obj.team_id).then(setTeam);
  }, []);
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${obj.name}?`)) {
      deleteSingleMember(obj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={obj.image} alt={obj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>Name: {obj.name}</Card.Title>
          <Card.Subtitle>Role: {obj.role}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Team: {team.name}</Card.Subtitle>
          <Link href={`/member/${obj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisMember} className="m-2">
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
    team_id: PropTypes.string,

  }),
  onUpdate: PropTypes.func.isRequired,
};

Member.defaultProps = {
  obj: {},
};
