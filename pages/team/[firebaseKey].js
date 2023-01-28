/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewTeamMembers } from '../../api/merged';
import Member from '../../components/Member';
import { useAuth } from '../../utils/context/authContext';

export default function ViewTeamPage() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  const { user } = useAuth();

  const seeTheTeamMembers = () => {
    viewTeamMembers(firebaseKey).then(setTeamDetails);
  };

  useEffect(() => {
    seeTheTeamMembers();
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title>{teamDetails.name}</title>
      </Head>
      <h1>{teamDetails.name}</h1>
      <p>Created by {user.displayName}</p>
      <p>Created by {user.email}</p>
      <div className="d-flex flex-wrap">
        {teamDetails.membersArray?.map((item) => <Member key={item.firebaseKey} obj={item} onUpdate={seeTheTeamMembers} />)}
      </div>
    </>
  );
}
