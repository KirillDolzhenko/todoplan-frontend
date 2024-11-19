import UserBlock from "@/ui/Block/UserBlock/UserBlock";
import StoreProviderHOC from "@/ui/HOC/StoreProviderHOC";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      Profile <Link href={"auth"}>Auth</Link>
      <StoreProviderHOC>
        <UserBlock />
      </StoreProviderHOC>
    </div>
  );
}

export default page;
