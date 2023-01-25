/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewTeamMembers } from '../../api/merged';
import Member from '../../components/Member';

export default function ViewTeamPage() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const seeTheTeamMembers = () => {
    viewTeamMembers(firebaseKey).then(setTeamDetails);
  };

  useEffect(() => {
    seeTheTeamMembers();
  }, [firebaseKey]);

  return (
    <>
      <h1>{teamDetails.name}</h1>
      <div className="d-flex flex-wrap">
        {teamDetails.membersArray?.map((item) => <Member key={item.firebaseKey} obj={item} onUpdate={seeTheTeamMembers} />)}
      </div>
    </>
  );
}
