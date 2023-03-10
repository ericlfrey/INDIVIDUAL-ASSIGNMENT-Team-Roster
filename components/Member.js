/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleMember } from '../api/members';
import { getSingleTeam } from '../api/teams';
import { useAuth } from '../utils/context/authContext';

export default function Member({ obj, onUpdate }) {
  const [team, setTeam] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) getSingleTeam(obj.team_id).then(setTeam);
    return () => {
      isCancelled = true;
    };
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
          {obj.uid === user.uid
            && (
              <>
                <Link href={`/member/${obj.firebaseKey}`} passHref>
                  <Card.Link>EDIT</Card.Link>
                </Link>
                <Card.Link onClick={deleteThisMember} className="m-2">
                  DELETE
                </Card.Link>
              </>
            )}
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
