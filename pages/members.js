/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/members';
import Member from '../components/Member';
import { useAuth } from '../utils/context/authContext';

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) getAllMembers();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Members Page</title>
      </Head>
      <h1>All Members</h1>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <Member key={member.firebaseKey} obj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </>
  );
}
