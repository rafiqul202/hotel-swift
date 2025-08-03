import { auth } from "@/auth";
import Link from "next/link";
import LogOut from "./auth/LogOut";

const Navbar = async ({ sideMenu }) => {
  const user = await auth();

  return (
    <nav>
      <Link href="/">
        <h2 className="uppercase text-lg font-bold">hotel-swift</h2>
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
          {user?.user?.name && <p className="font-bold">{user?.user?.name}</p>}

          <li>
            {user?.user ? (
              <LogOut />
            ) : (
              <Link href={"/login"} className="login">
                Log In
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
