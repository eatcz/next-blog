import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cover from "@/components/cover";
import List from "@/components/lists";
import type { FC } from "react";
import { Button } from "antd";
import profilePic from "@/assets/imgs/preview.gif";
export default function Archive() {
  const bg = "@/assets/imgs/preview.gif";
  return (
    <>
      <Layout>
        <Head>
          <title>文章归档</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          /> */}
        </Head>
        <Header />
        <Cover />
        <List />
        <Footer />
      </Layout>
    </>
  );
}
