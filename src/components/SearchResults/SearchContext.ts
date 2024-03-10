import { createContext } from "react";
import { SearchContext as SearchContextType } from "@src/shared/types";

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);
