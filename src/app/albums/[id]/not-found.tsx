import { Flex, Text, Title } from '@mantine/core'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Flex align="start" p="xl" mt="xl" justify="start" direction="column" h="100vh">
        <Title fz="h1" c="gray.7"  order={1}>Not Found</Title>
        <Text fz="lg" c="red">Could not find requested resource</Text>  
        <Link href="/">Return Home</Link>
    </Flex>
  )
}
