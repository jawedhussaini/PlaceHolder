import { SimpleGrid } from "@mantine/core"
import User from "./User"


interface Users{
    id:number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode:string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}
interface UsersProps{
    users:Users[]
    
}
function Users({users}:UsersProps) {
    return (
         <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, lg: 2 }}
        spacing={{ base: "lg", md: "lg", lg: "xl" }}
       
      >{
       users.map((user)=>(
          <User key={user.id} users={{ id:user.id, name: user.name, username: user.username, email: user.email, address: user.address, phone: user.phone, website: user.website, company: user.company }} details={true}/>
       ))}
       </SimpleGrid>
    )
}

export default Users
