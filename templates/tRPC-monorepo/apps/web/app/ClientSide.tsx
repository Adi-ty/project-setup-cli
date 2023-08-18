"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello.query({ name: "Client" }).then((response) => {
      setGreeting(response);
    });
  });
  return <div>Client Side :- {greeting}</div>;
}
