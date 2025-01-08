import { create } from "zustand";
interface Posts {
  title: string;
  body: string;
  id: number;
  username: string;
  email: string;
}

interface PostsState {
  posts: Posts[];
  addPost: (post: Posts) => void;
  removePost: (id: number) => void;
  clearPosts: () => void;
}
const usePostStore = create<PostsState>((set) => ({
  posts: [],

  addPost: (post: Posts) =>
    set((state) => {
      if (state.posts.find((p) => p.id === post.id)) return state;
      return { posts: [...state.posts, post] };
    }),
  removePost: (id: number) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  clearPosts: () => set({ posts: [] }),
}));

export default usePostStore;
