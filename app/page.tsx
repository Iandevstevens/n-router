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

      <button onClick={goToCache}>Go to vide (cache page)</button>
    </main>
  );
}
