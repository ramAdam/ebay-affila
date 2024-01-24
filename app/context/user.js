"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);

  // Remove the Supabase client code

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      // Simulate API call to get user data
      const fakeUser = {
        id: "123",
        email: "fakeuser@example.com",
        name: "Fake User",
        picture: "https://example.com/fakeuser.jpg"
      };

      setUser(fakeUser);
      setId(fakeUser.id);
      setEmail(fakeUser.email);
      setName(fakeUser.name);
      setPicture(fakeUser.picture);
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    // Simulate sign out
    clearUser();
    router.push('/');
  };

  const clearUser = () => {
    setUser(null);
    setId(null);
    setEmail(null);
    setName(null);
    setPicture(null);
  };

  const exposed = { user, id, email, name, picture, signOut };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;