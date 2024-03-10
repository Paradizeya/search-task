import style from "./style.module.css";

import { useEffect, useState, useContext } from "react";

import useDebounce from "@src/hooks/useDebounce";
import { getUsersByQuery } from "@src/api/UsersAPI";
import { SearchContext } from "../SearchResults/SearchContext";

export function SearchForm() {
  const [searchParams, setSearchParams] = useState<string>("");
  const debouncedSearchParams = useDebounce(searchParams, 500);
  const { setUsers, setLoading, setError } = useContext(SearchContext);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await getUsersByQuery(debouncedSearchParams);
      setUsers(data);
      setError(error);
      setLoading(false);
    };
    fetchData();
  }, [debouncedSearchParams]);

  return (
    <div className={style.searchForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="найти пользователя..."
          value={searchParams}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
