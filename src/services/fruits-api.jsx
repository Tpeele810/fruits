import axios from 'axios'
//const baseURL = "http://localhost:3000/fruits"
const baseURL = 'https://fruits-backend-k2yn.onrender.com/fruits'
//Show all Fruits 

export const getFruits = async() => {
    const URL = baseURL
    const response = await axios.get(URL)
    return response
}


// Show one FRUIT
export const getFruit = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.get(URL)
    return response
}

// Create a FRUIT
export const createFruit = async (fruit) => {
    const URL = baseURL
    const response = await axios.post(URL, fruit)
    return response
}

// Update a FRUIT
export const editFruit = async (id, updatedFruit) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.put(URL, updatedFruit)
    return response
    }

// Delete a FRUIT
export const deleteFruit = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.delete(URL)
    return response
}