/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getTeams } from '../api/teams';
import Team from '../components/Team';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getAllTeams = () => getTeams(user.uid).then(setTeams);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) getAllTeams();
    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <>
      <Head>
        <title>Welcome Page</title>
      </Head>
      <h5>"Childe Roland to the Dark Tower Came."</h5>
      <h6>- Robert Browning, 1852</h6>
      <h5>"The man in black fled across the desert, and the gunslinger followed."</h5>
      <h6>- Stephen King, 1978</h6>
      <hr />
      <h1>Welcome, {user.displayName}</h1>
      <h5>Choose a Ka-Tet or Create a <u><Link passHref href="/team/new">New One</Link></u> to Continue</h5>
      {teams.map((item) => (
        <Team key={item.firebaseKey} obj={item} onUpdate={getAllTeams} />
      ))}
    </>
  );
}
