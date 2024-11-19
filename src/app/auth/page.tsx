import LogInForm from "@/pages/LogInForm/LogInForm";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
import { IParamsAuth } from "@/types/params.types";
import dynamic from "next/dynamic";
import AuthBlock from "@/ui/Block/AuthBlock/AuthBlock";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import StoreProviderHOC from "@/ui/HOC/StoreProviderHOC";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Authorization page",
};

export default async function Home() {
  return (
    <StoreProviderHOC>
      <AuthBlock />
    </StoreProviderHOC>
  );
}
