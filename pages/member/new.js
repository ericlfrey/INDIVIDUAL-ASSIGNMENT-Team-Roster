import Head from 'next/head';
import React from 'react';
import MemberForm from '../../components/Forms/MemberForm';

export default function AddMemberPage() {
  return (
    <>
      <Head>
        <title>New Member</title>
      </Head>
      <MemberForm />
    </>
  );
}
