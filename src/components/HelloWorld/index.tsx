import React, { useEffect } from "react";

export interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }: HelloWorldProps): JSX.Element => {
  useEffect(() => {
    console.log('hello world');
  }, []) 

  return (
    <div>Hey {name}, say hello to TypeScript.</div>
  );
}

export default HelloWorld;
