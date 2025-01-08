

import {  Button, Group, Input, Text, Title } from "@mantine/core";
import {  IconSearch } from "@tabler/icons-react";
import Form from 'next/form'

import classes from "./HeroSection.module.css";

function Hero() {
    return (
           <div className={classes.HerroContainer}> 
      <div className={classes.inner}>
        <Title className={classes.title}>POSTCOM</Title>
        <Title className={classes.subtitle}>
          A Collection of All Kind of Post 
        </Title>

        <Text className={classes.description} mt={30}>
          Build fully functional  web applications with ease –
        Post includes all components and hooks to cover you in any
          situation
        </Text>

        <Group mt={40} className={classes.controls}>
          <Form action="/search" className="search" >
             <Input name="query" radius="xl" w={500} size="md" placeholder="Search..." />;
             <Button type="submit"  className={classes.icon} variant="transparent"><IconSearch size={25} color="green"/></Button>
             </Form>
        </Group>
      </div>
    </div>
    )
}

export default Hero
