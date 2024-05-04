import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { MobileNav } from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed-50 shadow-light w-full gap-5 p-6  dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center  gap-1">
        <Image src="/assets/images/site-logo.svg" width={23} height={23} alt="devEya"/>
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev <span className="text-primary-500">Eya</span></p>
      </Link>
      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme /> 

        <SignedIn>
        <UserButton afterSignOutUrl="/"
        appearance={{
            elements:{avatarBox:'h-10 w-10'},
            variables:{
                colorPrimary:'#ff7000'
            }
        }} />
        </SignedIn>
       <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
