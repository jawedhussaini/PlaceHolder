"use client";
import { Card, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import ModalForImage from "../ModalForImage/ModalForImage";
import classes from "./Images.module.css";

interface Images {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function SingleImage({ title, url, thumbnailUrl }: Images) {
  const [opened, { close, open }] = useDisclosure(false);
  const [image, setImage] = useState<string>("");

  return (
    <>
      <ModalForImage opened={opened} image={image} onClose={close} />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex gap="md" justify="center" align="center" direction="row">
          <Image
            onClick={() => {
              setImage(url);
              open();
            }}
            className={classes.image}
            width={50}
            height={50}
            src={thumbnailUrl} // Use `thumbnailUrl` for small image
            alt={title}
          />
          <Text>{title}</Text>
        </Flex>
      </Card>
    </>
  );
}

export default SingleImage;
