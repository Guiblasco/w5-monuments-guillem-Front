import type { Monument } from "../monuments/types";

export const getMonuments = async (): Promise<{ monuments: Monument[] }> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}monuments`);

  const { monuments } = (await apiResponse.json()) as { monuments: Monument[] };

  return { monuments };
};
