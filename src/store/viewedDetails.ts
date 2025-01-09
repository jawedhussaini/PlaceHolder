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

  clearPosts: () => void;
}
const usePostStore = create<PostsState>((set) => ({
  posts: [],

  addPost: (post: Posts) =>
    set((state) => {
      if (state.posts.find((p) => p.id === post.id)) return state;
      return { posts: [...state.posts, post] };
    }),

  clearPosts: () => set({ posts: [] }),
}));

export default usePostStore;
