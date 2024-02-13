import { useSession } from "next-auth/react";

// * Client Side Auth

export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user?.role;
};
