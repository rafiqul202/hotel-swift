import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <h2 className="uppercase text-lg font-bold">hotel-swift</h2>
      </Link>

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

        <li>
          <Link href="/login" class="login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
