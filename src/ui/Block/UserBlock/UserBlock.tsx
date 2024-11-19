"use client";

import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";

function UserBlock() {
  const user = useAppSelector((store) => store.userSlice.user);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, []);

  return <div>{user ? user.username : "There is nothing("}</div>;
}

export default UserBlock;