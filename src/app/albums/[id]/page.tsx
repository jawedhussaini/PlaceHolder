import Images from "@/components/images/Images"
import { fetchImagesByAlbumId } from "@/helper/images"
import { notFound } from "next/navigation"


async function page({params}:{params:{id:number}}) {
    const {id}=await params
    const image=await fetchImagesByAlbumId(id)

     if (image.length===0) {
          notFound()
        }
    return (
        
        <Images images={image} title="Images By Album" description="you can find all images by album in here" />
    
    )
}

export default page
