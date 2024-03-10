import { User, UserError } from "@src/shared/types";

const BASE_URL = "https://dummyjson.com/users";

export const getUsersByQuery: (
  query: string
) => Promise<{ data: User[]; error: UserError }> = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}`);
    if (!response.ok) {
      throw new Error(
        `The server responded with a status of ${response.status} (${response.statusText})`
      );
    }
    const data: { users: User[]; total: number; skip: number; limit: number } =
      await response.json();
    return {
      data: data.users,
      error: {
        isError: false,
        errorMessage: "",
      },
    };
  } catch (e) {
    const message = (e as Error).message;
    console.error("Ошибка при получении данных:", message);
    return {
      data: [],
      error: {
        isError: true,
        errorMessage: message,
      },
    };
  }
};
