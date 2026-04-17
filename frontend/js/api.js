// api.js

// Function to authenticate user
function authenticateUser(username, password) {
    // API call for user authentication
    return fetch('/api/authenticate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    }).then(response => response.json());
}

// Function to fetch the menu
function fetchMenu() {
    // API call to get the menu items
    return fetch('/api/menu')
        .then(response => response.json());
}

// Function to create an order
function createOrder(orderDetails) {
    // API call to create an order
    return fetch('/api/orders', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    }).then(response => response.json());
}

// Function to manage user profile
function manageUserProfile(userId, profileData) {
    // API call to update user profile
    return fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(profileData)
    }).then(response => response.json());
}