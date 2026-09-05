const config = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  defaults: {
    timeout: 5000,
    retries: 3,
  },
};

export default config;

export const expected_status = 200;
