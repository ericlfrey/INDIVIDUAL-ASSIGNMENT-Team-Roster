import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../api/members';
import MemberForm from '../../components/Forms/MemberForm';
import Meta from '../../components/Meta';

export default function EditMemberPage() {
  const [editMember, setEditMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditMember);
  }, [firebaseKey]);
  return (
    <>
      <Meta />
      <MemberForm obj={editMember} />
    </>
  );
}
