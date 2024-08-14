export const getMonuments = async (path: string): Promise<Response> => {
  const apiResponse = await fetch(
    `https://w5-monuments-guillem.onrender.com/${path}`,
  );
  return (await apiResponse.json()) as Response;
};
