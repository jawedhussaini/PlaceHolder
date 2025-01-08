import { Center, Container, SimpleGrid, Space, Text, Title } from "@mantine/core"
import classes from "./Album.module.css"
import Album from "./Album"
interface Albums{
    userId: number,
    id: number,
    title: string
}
interface AlbumProps{
    albums: Albums[],
    description: string,
    title: string,
    cols?:object
}

function Albums({albums,description,title,cols}:AlbumProps) {
    return (
     
         <Container  size="xl" className={classes.wrapper} >
      <Title className={classes.title}>{title}</Title>
      <Space h="md" />

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>
      <Center>
      <SimpleGrid
        mt={60}
        cols={cols}
        spacing={{ base: "lg", md: "lg", lg: "xl" }}
       
      >
       {albums.map((album:Albums)=><Album key={album.id} {...album} />)}
      </SimpleGrid>
      </Center>
    </Container>
    )
}

export default Albums
