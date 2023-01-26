import Head from 'next/head';
import React from 'react';
import TeamForm from '../../components/Forms/TeamForm';

export default function AddTeamPage() {
  return (
    <>
      <Head>
        <title>New Ka-Tet</title>
      </Head>
      <TeamForm />
    </>
  );
}
