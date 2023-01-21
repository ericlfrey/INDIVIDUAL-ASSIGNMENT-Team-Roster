/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/members';
import Member from '../components/Member';
import { useAuth } from '../utils/context/authContext';

export default function TeamPage() {
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
      <h1>Team</h1>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <Member key={member.firebaseKey} obj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </>
  );
}
