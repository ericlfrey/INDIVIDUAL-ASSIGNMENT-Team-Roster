/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getTeams } from '../api/teams';
import Team from '../components/Team';
import { useAuth } from '../utils/context/authContext';

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getTeams(user.uid).then(setTeams);
  });
  return (
    <div>
      {teams.map((item) => (
        <Team key={item.firebaseKey} obj={item} />
      ))}
    </div>
  );
}