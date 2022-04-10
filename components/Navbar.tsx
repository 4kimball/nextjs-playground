import React, { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Navbar;
