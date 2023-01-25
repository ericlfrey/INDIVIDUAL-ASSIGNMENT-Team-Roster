/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleTeam } from '../../api/teams';

export default function ViewTeamPage() {
  const [team, setTeam] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getTheSingleTeam = () => {
    getSingleTeam(firebaseKey).then(setTeam);
  };
  useEffect(() => {
    getTheSingleTeam();
  }, [firebaseKey]);
  return (
    <h1>{team.name}</h1>
  );
}
