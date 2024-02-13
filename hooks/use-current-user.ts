import { useSession } from "next-auth/react";

// * Client Side Auth

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
