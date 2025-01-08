import Hero from "@/components/landing/Hero";
import Posts from "@/components/landing/Posts";

import { fetchPosts } from "@/helper/fetchData";




export default async function Home(  { searchParams }: { searchParams: Promise<{ page?: number }>}) { 
    const {page}=await searchParams 


  const posts=await fetchPosts(page)
  
  return (
    <>
<Hero/>

   <Posts posts={posts.posts} page={page} totlal={posts.total} title="All Posts" cols={{ base: 1, sm: 2, lg: 3 }} description=" you can find the best psts in here for your social media"/>

</>
  );
}
