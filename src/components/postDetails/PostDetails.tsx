'use client'
import usePostStore from "@/store/viewedDetails";
import { Badge, Flex, Text, Title } from "@mantine/core"
import { useEffect } from "react";

interface Posts{
    title:string,
    body:string,
    id:number

}
interface User{
    username:string,
    email:string
}
interface PostDetailsProps {
    post: Posts;
    user: User;
    border:boolean
}
function PostDetails({ post, user,border }: PostDetailsProps) {

    const {addPost}=usePostStore()

       useEffect(() => {
    
      addPost({
        title: post?.title,
        body: post?.body,
        id: post?.id,
        username: user?.username,
        email: user?.email,})
       },[])
    return (
        
         <Flex gap="md" bd={`${border ? "1px solid gray.3" : "none"} `}  p={"xl"} justify="center" align="start" direction="column" >
            <Title c="blue.7">{post?.title}</Title>
            <Text>{post?.body}</Text>
            <Flex gap="md" justify="center" align="center" direction="row"> 
             <Badge size="lg" variant="outline">{user?.username}</Badge> <Badge size="lg" variant="outline">{user?.email}</Badge>
            </Flex>
        </Flex>
    )
}

export default PostDetails
