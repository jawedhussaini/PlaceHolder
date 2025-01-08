"use client"
import usePostStore from "@/store/viewedDetails"
import PostDetails from "./PostDetails";
import { Button, Container, Flex, Space, Text, Title } from "@mantine/core";
import classes from "./Details.module.css";
interface Posts {
  title: string;
  body: string;
  id: number;
  username: string;
  email: string;
}

function Details() {
   const {posts,clearPosts}=usePostStore()
    return (
        <Container size="lg" className={classes.wrapper}>
      <Title className={classes.title}>All Viewed Posts</Title>
      <Space h="md" />

      <Container mb="md" size={560} p={0}>
        <Text size="sm" className={classes.description}>
          All Viewed Post In Here
        </Text>
      </Container>
     
      <Flex gap="xl" justify="center" align="start" direction="column">
       {posts.length >0 &&  <Button onClick={()=>clearPosts()}>Clear Viewed List</Button> } 
{
      posts.map((post:Posts)=>(<PostDetails  key={post.id} border={true} post={{ id: post.id,title: post.title, body: post.body }} user={{ username: post.username, email: post.email }} />))
}
</Flex>
    
     
    </Container>
        
          
        
    )
}

export default Details
