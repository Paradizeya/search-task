import style from "./style.module.css";

import { User } from "@src/shared/types";

export function UserCard(user: User) {
  return (
    <article className={style.userCard}>
      <img className={style.userPic} src={user.image} loading="lazy" />
      <div className={style.userInfo}>
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </article>
  );
}
