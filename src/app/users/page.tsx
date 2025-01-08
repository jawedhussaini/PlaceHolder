import Users from "@/components/users/Users"
import { fetchUsers } from "@/helper/users"
import { Container, Flex, Text, Title } from "@mantine/core"


async function page() {



    const users=await fetchUsers()

    return (
       <Container mt="xl">
         <Flex
    
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
            <Title fw="bolder" c="gray.7" fz="h1">ALL USERS</Title>
            <Text c="gray.7" fz="sm">you can find all users in here an by clicking you well find all posts all replays and more details about user</Text>


        </Flex>
        <Users users={users}/>
       </Container>
    )
}

export default page
