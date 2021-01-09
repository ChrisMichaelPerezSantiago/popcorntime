const axios = require('axios');

const f = async(url) =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const { data } = await axios.get(url);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = f;