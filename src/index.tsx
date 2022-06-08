import React, { useEffect } from "react";

export const HelloWorld = ({ name }: { name: string }): JSX.Element => {
  useEffect(() => {
    console.log('hello world');
  }, []) 

  return (
    <div>Hey {name}, say hello to TypeScript.</div>
  );
}

export * from "./exports";
