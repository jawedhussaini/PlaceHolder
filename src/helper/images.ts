export async function fetchImagesByAlbumId(id: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
