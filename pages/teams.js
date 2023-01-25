/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getTeams } from '../api/teams';
import Meta from '../components/Meta';
import Team from '../components/Team';
import { useAuth } from '../utils/context/authContext';

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };
  useEffect(() => {
    getAllTeams();
  }, []);
  return (
    <>
      <Meta />
      <div>
        {teams.map((item) => (
          <Team key={item.firebaseKey} obj={item} onUpdate={getAllTeams} />
        ))}
      </div>
    </>
  );
}
