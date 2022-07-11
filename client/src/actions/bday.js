import * as api from '../api/index.js'

export const createBday = async (formData) => {
    try {
      const { data } = await api.createBday(formData);
      return data
      
    } catch (error) {
      console.log(error);
    }
  };

  export const getBday = async () => {
    try {
      const { data } = await api.getBday();
      return data
      
    } catch (error) {
      console.log(error);
    }
  };