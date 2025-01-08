import {  Card, Center, Flex, Text } from "@mantine/core"
import classes from "./User.module.css"
import Link from "next/link"
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
interface Props{
  users:Users
  details:boolean
}

function User({users,details}:Props) {
    return (
     <Card  shadow="sm" className={classes.userCard} padding="lg" radius="md" withBorder>
     
        <Flex align="center" m="sm" justify="space-between" gap="md">
           <Text fs="normal" className={classes.name}>{users?.name}</Text>
        </Flex>
        
        <Flex className={classes.box} m="sm" bg="lime.4" p="md"  direction="column" gap="md">
           <Text fs="normal" c="white"><span className={classes.hedears}>Email:</span> {users?.email}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>Phone:</span> {users?.phone}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>Website:</span> {users?.website}</Text> 
        </Flex>
          <Flex className={classes.box} m="sm" bg="lime.6" p="md"  direction="column" gap="md">
           <Text fs="normal" c="white"><span className={classes.hedears}>City: </span> {users?.address?.city}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>Street:</span> {users?.address?.street}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>Zipcode:</span> {users?.address?.zipcode}</Text>
            <Text fs="normal" c="white"><span className={classes.hedears}>Geo Lat:</span> {users?.address?.geo.lat}</Text> 
        </Flex>
         <Flex className={classes.box} m="sm" bg="lime.8" p="md"  direction="column" gap="md">
           <Text fs="normal" c="white"><span className={classes.hedears}>Company: </span> {users?.company?.name}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>catchPhrase:</span> {users?.company?.catchPhrase}</Text>
           <Text fs="normal" c="white"><span className={classes.hedears}>BS:</span> {users?.company.bs}</Text>
 
        </Flex>
        {details &&
        <Center >
        <Link className={classes.details} href={`/users/${users?.id}`}>Detials</Link>
        </Center>
}
    </Card>
    )
}

export default User
