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
    <TeamForm obj={editItem} />
  );
}
