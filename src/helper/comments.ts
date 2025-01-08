export async function fetchCommentsByPostId(id: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
