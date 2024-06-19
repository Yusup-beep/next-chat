"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.emit("newMessage", "Hello from the client!");
  }, []);

  return (
    <div className="hidden lg:flex justify-center items-center w-full text-lg font-medium">
      <span className="rounded-full border px-5">Chat with someone</span>
    </div>
  );
}
