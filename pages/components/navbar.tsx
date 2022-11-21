
import { Navbar } from "flowbite-react";

export default function NavBar() {

    return (

        <>

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://foxstudent-lets.com/">
    <picture>
    <img
      src="https://www.freepnglogos.com/uploads/orange-fox-head-for-logo-png-8.png"
      className="mr-3 h-6 sm:h-9"
      alt="fox students"
     
    />
    </picture>
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-Sue-Ellen">
      FoxStudent
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='text-right  '>
      
    <Navbar.Link href="37">
      
      Thirty Seven
      
    </Navbar.Link>
    <Navbar.Link href="/50">
      Fifty
    </Navbar.Link>
    <Navbar.Link href="/71">
      Seventy One
    </Navbar.Link>
    <Navbar.Link href="/contact">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}