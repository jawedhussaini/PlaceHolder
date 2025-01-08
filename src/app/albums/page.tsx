import Albums from '@/components/Album/Albums'
import { fetchAllAlbums } from '@/helper/album'
import { Container } from '@mantine/core'
import React from 'react'
async function page() {
    const album=await fetchAllAlbums()
    
    return (
       
        <Container size="xl" >
          
        <Albums title='All Albums' cols={{ base: 1, sm: 2, lg: 3 }} description='all albums by all users' albums={album}/>
     
        </Container>
        
    )
}

export default page
