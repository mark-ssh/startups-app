import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  const logout = async () => {
    "use server";

    await signOut();
  };
  const login = async () => {
    "use server";

    await signIn("github");
  };
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-worksans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="w-fit">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 font-worksans">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-gray-600 font-worksans"
              >
                <span>Create</span>
              </Link>
              <form action={logout} className="text-red-800">
                <button type="submit">Logout</button>
              </form>

              <Link
                href={`/user/${session?.id}`}
                className="text-gray-800 font-semibold"
              >
                <span>{session?.user?.name}</span>
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
