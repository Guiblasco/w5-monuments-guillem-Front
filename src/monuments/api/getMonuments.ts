import type { Monument } from "../types";

export const getMonuments = async (path: string): Promise<Monument> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}${path}`);
  return (await apiResponse.json()) as Monument;
};
