export const getMonuments = async (path: string): Promise<Response> => {
  const apiResponse = await fetch(`http://localhost:3001/${path}`);
  return (await apiResponse.json()) as Response;
};
