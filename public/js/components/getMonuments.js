export const getMonuments = async (path) => {
    const apiResponse = await fetch(`https://w5-monuments-guillem.onrender.com/${path}`);
    return (await apiResponse.json());
};
//# sourceMappingURL=getMonuments.js.map