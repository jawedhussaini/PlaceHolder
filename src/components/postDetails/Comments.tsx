import SingleComment from "./Comment";
import { Flex, Text, Title } from "@mantine/core";


interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
interface Props {
    commments:Comment[]
}

function Comments({commments}:Props) {
    return (
        <Flex mt="xl" justify="center" align="start" direction="column" >
            <Title c="blue.4">All Comments</Title>
            <Text>All Commnets on this post</Text>
            <Flex gap="md" justify="center" align="center" direction="column"> 
               {
                commments.map((comment:Comment) => (
                    <SingleComment key={comment.id} {...comment} />
                ))
               }
            </Flex>
        </Flex>
    )
}

export default Comments
