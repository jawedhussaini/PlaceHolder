import { Container, SimpleGrid, Space, Text, Title } from '@mantine/core'
import classes from './Images.module.css'

import SingleImage from './Image'
interface Images{
    albumId:number,
    id: number,
    title: string,
    url: string
    thumbnailUrl: string
}

interface ImagesPorps{

    images:Images[],
    title:string,
    description:string
}

function Images({images,title,description}:ImagesPorps) {
    return (
          <Container size="xl" className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Space h="md" />

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 3, lg: 4 }}
        spacing={{ base: "lg", md: "lg", lg: "xl" }}
       
      >
       {images.map((singleImage:Images)=><SingleImage key={singleImage.id} {...singleImage} />)}
      </SimpleGrid>
      
    </Container>
    )
}

export default Images
