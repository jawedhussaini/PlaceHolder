import ModalForImage from "@/components/ModalForImage/ModalForImage";
import { fetchImagesById } from "@/helper/images";



async function page({ params }: { params: Promise<{ id: string }> }) {
 
const {id}=await params

const a=await fetchImagesById(id)
  return (
<><ModalForImage opened={true}   image={a[0].url} /></>
  );
}

export default page
