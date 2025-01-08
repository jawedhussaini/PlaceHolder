interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export async function getSraechedTitle(query: string) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const newData = data.filter((arr: Posts) => arr.title.includes(query));

    return { posts: newData, total: newData.length / 6 };
  } catch (error) {
    throw error;
  }
}
