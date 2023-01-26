/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getTeams } from '../api/teams';
import Team from '../components/Team';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
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
      <Head>
        <title>Welcome Page</title>
      </Head>
      <h1>Welcome! Choose a Ka-Tet to continue.</h1>
      <div className="d-flex flex-wrap">
        {teams.map((item) => (
          <Team key={item.firebaseKey} obj={item} onUpdate={getAllTeams} />
        ))}
      </div>
    </>
  );
}
