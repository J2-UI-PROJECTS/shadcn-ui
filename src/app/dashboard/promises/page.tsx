import React from "react";

const fetch = () => {
  return new Promise((resolve, reject) => {
    const flag = false;
    
    if (flag) {
      resolve("resuelto");
    } else {
      reject("rechazado");
    }
  });
};

const Page = () => {
  const testFetch = fetch()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <div>Promises</div>;
};

export default Page;
