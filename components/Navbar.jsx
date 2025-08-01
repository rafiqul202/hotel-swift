import { auth } from "@/auth";
import Link from "next/link";
import { use } from "react";

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

          <li>Login</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
