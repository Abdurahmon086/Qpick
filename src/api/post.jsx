import axios from '../server/axios'

const postApi = {
    getAll: async () => axios.get("/products"),
    getSingle: async (id) => axios.get(`/products/${id}`),
    getCategory: async () => axios.get('/products/categories'),
    getCategorySingle: async (name) => axios.get(`/products/category/${name}`),

}

export default postApi