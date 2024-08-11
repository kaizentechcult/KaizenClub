import React from "react";
import Link from "next/link";

type Props = {
  to: string;
  text: string;
  className?: string;
};

const NavLinks = (props: Props) => {
  return (
    <Link
      href={props.to}
      className={`hover:text-white   duration-500 ${props.className}`}
    >
      {props.text}
    </Link>
  );
};

export default NavLinks;
