import axios from 'axios';

const url = 'http://localhost:3000';

const createInstance = (service: string) => {
  return axios.create({
    baseURL: `${url}/${service}`,
  });
};

export const testInstance = createInstance('test');
