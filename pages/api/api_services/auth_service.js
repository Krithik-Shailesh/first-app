export async function login(data) {
    const response = await fetch(`http://localhost:5001/d/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: data.email, password: data.password})
      })
    return await response.json();
}