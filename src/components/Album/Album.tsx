"use client"
import { Badge } from "@mantine/core"
import Link from "next/link"
import classes from "./Album.module.css"



interface Albums{
    userId: number,
    id: number,
    title: string
}
function Album(album:Albums) {
   
    return (
   
        <Badge  size="lg" variant="outline">
             <Link className={classes.link} href={`/albums/${album.id}`}>{album.title}  </Link>
             </Badge>
   
  
    )
}

export default Album
