/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getMembers } from '../../api/members';
import { useAuth } from '../../utils/context/authContext';
import Member from '../../components/Member';

export default function SearchPage() {
  const [searchMembers, setSearchMembers] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const searchAllMembers = () => {
    getMembers(user.uid).then((members) => {
      const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchInput));
      setSearchMembers(filteredMembers);
    });
  };

  useEffect(() => {
    const abortController = new AbortController();
    searchAllMembers();
    return () => {
      abortController.abort();
      // stop the query by aborting on the AbortController on unmount
    };
  }, [searchInput]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {searchMembers.map((item) => <Member key={item.firebaseKey} obj={item} onUpdate={searchAllMembers} />)}
      </div>
    </>

  );
}
