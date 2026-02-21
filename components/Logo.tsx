import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/hero.jpg" alt="Logo" width={90} height={90} />
    </div>
  );
};

export default Logo;
