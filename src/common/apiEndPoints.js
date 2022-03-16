
const Host = {
  ROOT: "http://localhost:3000",
  BACKEND: "http://localhost:3001",
  //BACKEND: "https://api.compareprime.com",
  PREFIX: "/v1/api", 
};

const ApiEndpoints = {
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    create: `/create`,
  },
 
};
 
export {ApiEndpoints , Host}