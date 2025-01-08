import Albums from "@/components/Album/Albums"
import Posts from "@/components/landing/Posts"
import User from "@/components/users/User"
import { fetchAlbumsByUserId } from "@/helper/album"
import { fetchPostsByUserId } from "@/helper/fetchData"
import { fetchUserById } from "@/helper/users"
import { Container } from "@mantine/core"
import { notFound } from "next/navigation"


async function Page({params,searchParams}:{params:Promise<{id:number}>, searchParams:Promise<{page:number}>}) {
    const {id}=await params
    const {page}=await searchParams
  
    const user=await fetchUserById(id)

    const posts=await fetchPostsByUserId({id:id,page:page})

    const album=await fetchAlbumsByUserId(id) 
    if (!user.id) {
      notFound()
    }

    return (
      <>
      <Container>
        <User users={{ id:user.id, name: user.name, username: user.username, email: user.email, address: user.address, phone: user.phone, website: user.website, company: user.company }} details={false} />
        </Container>
        <Posts posts={posts.posts} page={page} totlal={posts.total} title="Posts By User" cols={{ base: 1, sm: 2, lg: 3 }} description=" you can find all posts by user in here" />  
        <Albums albums={album} description=" Albums by User find here" title="Albums By User" cols={{ base: 1, sm: 2, lg: 3 }} />
      </>
    )
}

export default Page
