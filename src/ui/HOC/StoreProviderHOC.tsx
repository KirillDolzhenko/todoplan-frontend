import { AppStore, makeStore } from "@/redux/store";
import { IPropsChildren } from "@/types/props.types";
import React, { useRef } from "react";
import { Provider } from "react-redux";

function StoreProviderHOC({ children }: IPropsChildren) {
  let store = useRef<AppStore | null>(null);

  if (!store.current) {
    store.current = makeStore();
  }

  return <Provider store={store.current}>{children}</Provider>;
}

export default StoreProviderHOC;
