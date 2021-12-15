import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Head title={user} description="Página de perfil do usuário" />
      <h1 className="title">{user}</h1>
      <div>
        <Feed user={user} />
      </div>
    </section>
  );
};

export default UserProfile;
