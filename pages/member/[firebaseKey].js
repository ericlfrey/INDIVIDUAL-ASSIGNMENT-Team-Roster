import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../api/members';
import MemberForm from '../../components/Forms/MemberForm';

export default function EditMemberPage() {
  const [editMember, setEditMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditMember);
  }, [firebaseKey]);
  return (
    <>
      <Head>
        <title>Edit {editMember.name}</title>
      </Head>
      <MemberForm obj={editMember} />
    </>
  );
}
