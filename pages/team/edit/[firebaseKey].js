import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleTeam } from '../../../api/teams';
import TeamForm from '../../../components/Forms/TeamForm';

export default function EditTeamPage() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (
    <>
      <Head>
        <title>Edit {editItem.name}</title>
      </Head>
      <TeamForm obj={editItem} />
    </>
  );
}
