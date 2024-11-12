import LogInForm from "@/pages/LogInForm/LogInForm";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
import { IParamsAuth } from "@/types/params.types";
import dynamic from "next/dynamic";
import AuthBlock from "@/ui/Block/AuthBlock";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Authorization page",
};

export default async function Home({ searchParams }: IParamsAuth) {
  console.log((await searchParams).active);
  return (
    <div>
      <AuthBlock />
    </div>
  );
}
