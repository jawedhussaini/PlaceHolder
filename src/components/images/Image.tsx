"use client";
import { Card, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import ModalForImage from "../ModalForImage/ModalForImage";
import classes from "./Images.module.css";
import Link from "next/link";

interface Images {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function SingleImage({ title, id, thumbnailUrl }: Images) {


  return (
    <>
     
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex gap="md" justify="center" align="center" direction="row">
          <Link href={`/photo/${id}`}>
          <Image
          
            className={classes.image}
            width={50}
            height={50}
            src={thumbnailUrl} // Use `thumbnailUrl` for small image
            alt={title}
          />
          </Link>
          <Text>{title}</Text>
        </Flex>
      </Card>
    </>
  );
}

export default SingleImage;
