import React, { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div>
      <Link href="/about">
        <button>About</button>
      </Link>
      <Link href="/todo/intro">
        <button>go todo</button>
      </Link>
    </div>
  );
};

export default Navbar;
