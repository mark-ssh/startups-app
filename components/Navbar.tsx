import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  const logout = async () => {
    "use server";

    await signOut({ redirectTo: "/" });
  };
  const login = async () => {
    "use server";

    await signIn("github");
  };
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-worksans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="w-fit flex items-center gap-2">
          <Image
            src="/startup-app-logo.png"
            className="h-10 w-10 object-contain"
            alt="logo"
            width={144}
            height={25}
          />
          <p className="text-lg font-medium">Startups App</p>
        </Link>
        <div className="flex items-center gap-5 font-worksans">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-gray-600 font-worksans"
              >
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <form action={logout} className="text-red-800">
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link
                href={`/user/${session?.id}`}
                className="text-gray-800 font-semibold"
              >
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={login}>
              <button type="submit" className="text-gray-800">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
