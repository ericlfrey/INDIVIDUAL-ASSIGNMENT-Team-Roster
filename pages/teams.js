/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getAllPublicTeams } from '../api/teams';
import Team from '../components/Team';
import { useAuth } from '../utils/context/authContext';

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getAllTeams = () => {
    getAllPublicTeams(user.uid).then(setTeams);
  };
  useEffect(() => {
    getAllTeams();
  }, [teams]);
  return (
    <>
      <Head>
        <title>Teams</title>
      </Head>
      <h1>We are ka-tet. We are one from many</h1>
      <div className="d-flex flex-wrap">
        {teams.map((item) => (
          <Team key={item.firebaseKey} obj={item} onUpdate={getAllTeams} />
        ))}
      </div>
    </>
  );
}
