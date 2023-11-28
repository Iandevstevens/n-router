"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
const test = () => {
  // return axios
  //   .get("https://192.168.1.1/cgi-bin/cgi-cors.sh")
  //   .then((response) => {
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  return axios
    .get("https://192.168.1.1/cgi-bin/cgi-cors.sh")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default function Home() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    test().then((data2) => {
      console.log(data2);
      setData(data2);
    });
  }, []);

  const goToCache = () => {
    window.location.href = "http://192.168.2.254:81/test.html";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src="https://192.168.2.254/cgi-bin/cgi-image.sh" />
      <img src="https://192.168.2.254:444/cgi-bin/cgi-image.sh" alt="" />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          </a>
        </div>
      </div>

      <button onClick={goToCache}>Go to vide (cache page)</button>
    </main>
  );
}
