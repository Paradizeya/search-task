export type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
};

export type UserError = {
  isError: boolean;
  errorMessage: string;
};

export type SearchContext = {
  users: User[];
  setUsers: (newUsers: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (newError: UserError) => void;
};

export type MessageTypes = "danger" | "info";
