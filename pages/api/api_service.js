export async function addAccount(data) {
    const response = await fetch(`http://localhost:5001/d/addAccount`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data.name, email: data.email, phone: data.phone, password: data.password})
      })
    return await response.json();
}