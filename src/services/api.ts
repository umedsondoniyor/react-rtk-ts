export const fetchResults = async (date: string, page: number, limit: number, desc: boolean) => {
  const API_URL = `https://api.formula55.tj/results?type=prematch&date=${date}&page=${page}&limit=${limit}&desc=${desc}`;
  // console.log("API URL:", API_URL); // Add this line
  const response = await fetch(API_URL);
  // console.log("API Response:", response); // Add this line
  return response.json();
};
