export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function fetchUserById(id?: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

