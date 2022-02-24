import React, { createContext, useEffect, useState } from 'react';
import { User } from '../classes/User';

interface Props {
  children: React.ReactNode,
  user?: User
}

const UserContext = createContext<User | null>(null);

function UserProvider(props: Props) {

  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    if (props.user) {
      setuser(props.user);
    }
    return () => { }
  }, [props.user]);

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </ UserContext.Provider>
  );
}

export { UserContext, UserProvider };