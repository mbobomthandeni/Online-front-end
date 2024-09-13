import axiosInstance from '../axiosConfig';

const BASE_URL = 'http://localhost:9090/shopping_store/product';
// Create a product
export const createProduct = async (product) => {
    try {
        const response = await axiosInstance.post(BASE_URL+'/create', product);
        console.debug("Product created:", response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'creating product');
        throw error;
    }
};

// Read a product by ID
export const readProduct = async (id) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/${id}`);
        console.debug('Product read successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'reading product');
        throw error;
    }
};

// Update a product by ID
export const updateProduct = async (id, product) => {
    try {
        const response = await axiosInstance.put(BASE_URL+`/update/${id}`, product);
        console.debug('Product updated successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'updating product');
        throw error;
    }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    try {
        await axiosInstance.delete(BASE_URL+`/delete/${id}`);
        console.debug('Product deleted successfully');
    } catch (error) {
        handleAxiosError(error, 'deleting product');
        throw error;
    }
};

// Get all products
export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(BASE_URL+'/getAll');
        console.debug('Products fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products');
        throw error;
    }
};

// Get products by name
export const getProductsByName = async (name) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/name/${name}`);
        console.debug('Products by name fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products by name');
        throw error;
    }
};

// Get products by category ID
export const getProductsByCategoryId = async (categoryId) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/category/${categoryId}`);
        console.debug('Products by category ID fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products by category ID');
        throw error;
    }
};

// Get products by price range
export const getProductsByPriceRange = async (minPrice, maxPrice) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/price`, {
            params: { minPrice, maxPrice }
        });
        console.debug('Products by price range fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products by price range');
        throw error;
    }
};

// Get products by stock quantity greater than a value
export const getProductsByStockQuantity = async (stockQuantity) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/stock`, {
            params: { stockQuantity }
        });
        console.debug('Products by stock quantity fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products by stock quantity');
        throw error;
    }
};

// Get products created after a specific date
export const getProductsCreatedAfter = async (createdAt) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/created-after`, {
            params: { createdAt }
        });
        console.debug('Products created after date fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products created after date');
        throw error;
    }
};

// Get products updated before a specific date
export const getProductsUpdatedBefore = async (updatedAt) => {
    try {
        const response = await axiosInstance.get(BASE_URL+`/updated-before`, {
            params: { updatedAt }
        });
        console.debug('Products updated before date fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching products updated before date');
        throw error;
    }
};

// Helper function to handle Axios errors
const handleAxiosError = (error, action) => {
    if (error.response) {
        console.error(`Error ${action} - Response status:`, error.response.status);
        console.error(`Error ${action} - Response data:`, error.response.data);
    } else if (error.request) {
        console.error(`Error ${action} - No response received:`, error.request);
    } else {
        console.error(`Error ${action} - Request setup issue:`, error.message);
    }
    console.error(`Error ${action}:`, error);
};
