import { Button } from "@/components/ui/button";
import { Login } from "./login";
import { Search } from "./search";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-20 z-[49] px-16 lg:px-32 flex justify-between items-center shadow-sm bg-gradient-to-r from-green-500 via-blue-500 to-white">
        Tourify
        <Login />
      </nav>
      <nav className="fixed top-20 w-full h-12 z-[49] px-2 lg:px-4 gap-x-5 flex justify-center items-center shadow-sm bg-gradient-to-r from-white via-green-500 to-orange-500">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/most-visited">
          <Button>Most Visited</Button>
        </Link>
        <Link href="/best-reviews">
          <Button>Best Reviews</Button>
        </Link>
        <Link href="/trending">
          <Button>Trending</Button>
        </Link>
        <Search />
      </nav>
    </>
  );
};
