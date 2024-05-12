import { PiggyBank } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-cyan-200 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-cyan-200 to-sky-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        MoneyPro.io
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center">
      <p className="bg-gradient-to-r from-cyan-200 to-sky-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        MoneyPro.io
      </p>
    </a>
  );
}

export default Logo;