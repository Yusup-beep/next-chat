"use client";
import { Home, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", href: "/", icon: <Home /> },
  { title: "Profile", href: "/profile", icon: <UserRound /> },
  { title: "Settings", href: "/settings", icon: <Settings /> },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white/85 border-t flex justify-between items-center fixed bottom-0 right-0 left-0 p-3 z-10 md:static md:flex-col md:justify-normal md:gap-5 md:border-r transition-all">
      {navItems.map((item) => {
        return (
          <Link
            key={item.title}
            className={`flex flex-col items-center ${
              pathname == item.href && "active"
            }`}
            href={item.href}
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
