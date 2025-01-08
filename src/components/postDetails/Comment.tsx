import { Badge, Card, Flex, Text } from "@mantine/core";


interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
function SingleComment({name,email,body}:Comment) {
    
    return (
    <Card  shadow="sm"  padding="lg" radius="md" w="100%" withBorder>
       
       
    <Text>{body}</Text>
      <Flex gap="md" m="sm" justify="center" align="start" direction="column"> 
             <Badge size="lg" variant="outline">{name}</Badge> <Badge size="lg" variant="outline">{email}</Badge>
        </Flex>
    </Card>
    )
}

export default SingleComment
