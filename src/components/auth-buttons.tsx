'use client';

import { signIn, signOut } from 'next-auth/react';

const AuthButtons = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default AuthButtons;
