"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const About = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>

      {data ? `Welcome ${data.user?.name}` : "No user"}
    </div>
  );
};

export default About;
