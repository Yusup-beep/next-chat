import ChatList from "@/components/chat-list";
import Navigation from "@/components/navigation";
import { ChatItem } from "@/types";

const users: ChatItem[] = [
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: false,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup Yedyyew",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: false,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup Yedyyew",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: false,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup Yedyyew",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
  {
    avatartUrl: "/next.svg",
    username: "Yusup",
    lastMessage: "Nalow Turkmen?",
    isOnline: true,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Navigation />

      <ChatList users={users} />

      {children}
    </div>
  );
}
