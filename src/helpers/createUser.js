
var requestURL = "https://fullstack-test-navy.vercel.app/api/users/create"

export async function post_create_user(data) {
    try {
        const response = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log("response: ", response)
        if (response.ok) {
            return await response.json()
        } else {
            return await response.json()
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}