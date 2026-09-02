const BASE_URL = "https://dummyjson.com/products";

async function fetchProductApi() {
    
    const response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.json();

}


async function fetchProductByIdApi(id) {
    
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.json();

}

export {fetchProductApi, fetchProductByIdApi};