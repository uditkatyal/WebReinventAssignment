// apiService.js

const apiUrl = "https://reqres.in/api";

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log(response);
  // handleErrors(response);
  const data = await response.json();
  return data;
};

const apiService = {
  login: async (credentials) => {
    const url = `${apiUrl}/login`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    return fetchData(url, options);
  },

  getUsers: async () => {
    const url = `${apiUrl}/users`;
    return fetchData(url);
  },

  getUser: async (userId) => {
    const url = `${apiUrl}/users/${userId}`;
    return fetchData(url);
  },

  // Add more methods for other API endpoints as needed
};

export default apiService;
