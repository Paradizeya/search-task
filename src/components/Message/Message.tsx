import { MessageTypes } from "@src/shared/types";
import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  type?: MessageTypes;
}

export function Message({ children, type }: Props) {
  let messageStyle;
  switch (type) {
    case "danger":
      messageStyle = style.messageDanger;
      break;

    case "info":
      messageStyle = style.messageInfo;
      break;

    default:
      messageStyle = "";
      break;
  }

  return <p className={`${style.messageBox} ${messageStyle}`}>{children}</p>;
}
