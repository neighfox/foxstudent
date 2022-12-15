import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { useState as UseState } from "react";
declare var setBody: any;

export default function contact() {
  const [name, setName] = UseState("");
  const [email, setEmail] = UseState("");
  const [message, setMessage] = UseState("");
  const [submitted, setSubmitted] = UseState(false);
  const [count , setCount] = UseState(0);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <>
      <NavBar />

      <div className=" ">
        <div className="text-center ">
          <h1 className="text-5xl py-5 mt-7">Contact</h1>

          <picture></picture>
          <h2 className="text-2xl px-2 mb-10">
            {" "}
            Please contact Louise on{" "}
            <button className="underline">
              {" "}
              <a href="tel:07787408689">07787408689</a>
            </button>{" "}
            to ask about availability
          </h2>
          <h3>Alternatively, please fill out the form below </h3>
        </div>
        <div className="flex h-screen px-5 pt-10">
          <form className="w-full max-w-sm m-auto  mt-20">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value)
                    
                  }}
                  name="name"
                  placeholder="Insert name"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  id="inline-password"
                  type="text Area"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <textarea
                  className="mr-2 leading-tight"
                  rows={5}
                  maxLength={300}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setCount(e.target.value.length);
                  }}
                  name="message"
                  placeholder="Your message"
                />
                <span className="text-sm">{count}/300</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <button
                className="shadow bg-blue-500  focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
                type="button"
                onClick={(e) => {
                  handleSubmit(e);
                  6;
                }}
              >
                Send Louise a message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </>
  );
}


//Just A thought Nathan you should write a novel. 
