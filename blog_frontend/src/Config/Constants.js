const prod = {
  url: {
    // API_URL: 'http://veblog.io/api/' // To be added
  },
};

const dev = {
  url: {
    API_URL: "http://127.0.0.1:8000/api/",
  },
};

const headers = {
  "Content-type": "application/json",
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export { headers, config };
