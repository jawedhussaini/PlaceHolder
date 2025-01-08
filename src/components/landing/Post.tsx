
import { Card, Text, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import classes from "./Posts.module.css";




interface Posts{
    userId:number,
    id:number,
    title:string,
    body:string
}
function Post({id,title,body}:Posts) {

  
    return (
      
              <Card  shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
     <Text size="sm" c="dimmed">
      {body.slice(0,100)}
      </Text>
      <Badge  size="lg" variant="outline">
      <Link className={classes.link} href={`/${id}`}>
        Details
      </Link>
      </Badge>
      </Group>
    </Card>
      
    )
}

export default Post
