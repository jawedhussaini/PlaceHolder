import type { Metadata } from "next";
import "@mantine/core/styles.css";
import {
  DirectionProvider,
  MantineProvider,
} from "@mantine/core";
import { theme } from "@/styles/theme";
import { LandingContainer } from "@/components/landing/landingPageContainer";
import { Header } from "@/components/landing/Header";





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <head>
   
      </head>
      <body>
      <DirectionProvider>
          <MantineProvider theme={theme}>
             <LandingContainer>
      <Header
        links={[
          {
            link: "/",
            label: "Home",
          },
          {
            link: "/users",
            label: "users",
          },
          {
            link: "/albums",
            label: "Album",
          },
        ]}
      />
      </LandingContainer>
              {children}
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
