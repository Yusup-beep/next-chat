"use client";
import { ChatItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatList({ users }: { users: ChatItem[] }) {
  const pathname = usePathname();
  const hide =
    pathname.startsWith("/chat") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");
  return (
    <div
      className={`flex ${
        hide && "hidden"
      } flex-col max-w-[400px] w-full md:border-r lg:flex`}
    >
      {users.map((item) => {
        return (
          <Link
            href={`/chat/${item.username}`}
            className="hover:bg-slate-100 transition-all p-3 flex gap-3 items-center border-b"
            key={item.lastMessage}
          >
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full overflow-hidden object-cover ring-1 ring-offset-2"
                src={item.avatartUrl}
                alt={item.username}
              />
              {item.isOnline && (
                <div className="absolute left-8 ring-1 ring-black bottom-0 h-2 w-2 bg-green-500 rounded-full"></div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-lg">{item.username}</span>
              <span className="text-sm text-slate-600">{item.lastMessage}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
