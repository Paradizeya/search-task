import style from "./style.module.css";

import { useContext } from "react";

import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

export function SearchResults() {
  const { users } = useContext(SearchContext);

  return (
    <div className={style.usersList}>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
