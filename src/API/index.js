const API_URL = "https://fakestoreapi.com";

export const registerUser = async (userObj) => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        const json = await response.json();
        console.log(json);
        return (json)
    } catch (err) {
        console.error(err);
    }
}

export const getAllUsers = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/users')
        
        const json = await response.json();
        console.log(json);
        return (json)
    }
    catch (err) {
        console.error(err);
    }
}

export const loginUser = async (userObj) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userObj.username,
                password: userObj.password
            })
        })
        const json = await response.json();

        return json.token;
    } catch (err) {
        console.error(err);
    }
}
export const getUser = async (token) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const json = await response.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            // headers: {
            //     "Content-Type": "application/json",
                
            // }
        });
        const json = await response.json();
        console.log(json)
        return json;
    } catch (err) {
        console.error(err);
    }
}

export const getSingleProduct = async (id) => {
    try {
        console.log(id);
        const response = await fetch(`${API_URL}/products/${id}`);
        const json = await response.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export const getSingleCart = async (userId) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`,)

        const json = await response.json();
        return json;
    }
    catch (err) {
        console.error(err);
    }
}

// / array of products <---- from the cart API call <-- e.g. stored in a variable cartArr
// create a function that makes an api call for a single product, e.g. getProduct
// Promise.all(cartArr.map(item=>getProduct(item.productId))
// .then(res=>// you have your array here)
// .catch(err);
// cartArr = [{"productId":1,"quantity":2},{"productId":9,"quantity":1}]
// [getProduct(1), getProduct(9)]
// [{name:"jacket", price:99.99}, {name:"book", price:10.00}]












