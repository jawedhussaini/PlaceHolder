export async function fetchAllAlbums() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function fetchAlbumsByUserId(id?: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums?userId=" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
