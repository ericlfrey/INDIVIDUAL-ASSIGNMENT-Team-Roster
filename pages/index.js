/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/members';
import Member from '../components/Member';
import Meta from '../components/Meta';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };
  useEffect(() => {
    getAllMembers();
  }, []);
  return (
    <>
      <Meta />
      <h1>Your Ka-Tet</h1>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <Member key={member.firebaseKey} obj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </>
  );
}
