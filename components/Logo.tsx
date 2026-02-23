import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo_new.svg" alt="Logo" width={70} height={70} />
    </div>
  );
};

export default Logo;
