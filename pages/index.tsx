import Head from 'next/head'
import Image from 'next/image'

import { Navbar } from "flowbite-react";

export default function Home() {
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Fox Student
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    
    <Navbar.Link href="/navbars">
      37
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      50
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      71
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    
  )
}
