"use client";
import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollLink from "./ScrollLink";
import { useAuthContext } from "@/contexts/authContext";

const Navbar: FC = () => {
  const { isLoggedIn, username } = useAuthContext();
  return (
    <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background backdrop-blur-lg  ">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex justify-start gap-12 items-center">
          <Link href="/">
            <h1 className="hidden font-bold text-white text-2xl md:block">
              Factonation
            </h1>
          </Link>
          <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
            <Link href="/dashboard">คอร์สเรียน</Link>
            <Link href="/#price-section" className="scroll-smooth">
              ราคาคอร์ส
            </Link>
            <Link href="/store">บทความ</Link>
            <ScrollLink href="#question-section">คำถามที่พบบ่อย</ScrollLink>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback>{username![0]}</AvatarFallback>
              </Avatar>
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "bg-secondary-button text-[#222]"
                )}
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link
                className={cn(buttonVariants({ variant: "ghost" }))}
                href="/login"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "bg-secondary-button text-[#222]"
                )}
                href="/register"
              >
                ลงทะเบียน
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
