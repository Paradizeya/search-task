import { User, UserError, MessageTypes } from "./shared/types";

import { useEffect, useState } from "react";

import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { Message } from "./components/Message/Message";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<UserError>({
    isError: false,
    errorMessage: "",
  });
  const [message, setMessage] = useState<{
    showMessage: boolean;
    text: string;
    type?: MessageTypes;
  }>({ showMessage: false, text: "" });

  const handleLoading: (loading: boolean) => void = (loading) => {
    setIsLoading(loading);
  };

  const handleUsersChange: (newUsers: User[]) => void = (newUsers) => {
    setUsers(newUsers);
  };

  const handleError: (newError: UserError) => void = (newError) => {
    setError(newError);
  };

  const changeMessage = () => {
    if (error.isError) {
      setMessage({
        showMessage: true,
        text: `Что-то пошло не так! D: \n ${error.errorMessage}`,
        type: "danger",
      });
    } else if (users.length === 0) {
      setMessage({
        showMessage: true,
        text: "Пользователей с таким именем не существует :(",
        type: "info",
      });
    }
  };

  useEffect(() => {
    isLoading
      ? setMessage({
          showMessage: false,
          text: "",
        })
      : changeMessage();
  }, [isLoading]);

  return (
    <SearchContext.Provider
      value={{
        users,
        setUsers: handleUsersChange,
        setLoading: handleLoading,
        setError: handleError,
      }}
    >
      <SearchForm />
      {isLoading ? (
        <Message>Загрузка...</Message>
      ) : (
        <>
          {message.showMessage && (
            <Message type={message.type}>{message.text}</Message>
          )}
          {users.length !== 0 && <SearchResults />}
        </>
      )}
    </SearchContext.Provider>
  );
}
