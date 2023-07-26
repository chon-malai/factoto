import { FC } from "react";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Herosection from "@/components/homePage/Herosection";
import Problemsection from "@/components/homePage/Problemsection";
import Benefitsection from "@/components/homePage/Benefitsection";
import Reviewsection from "@/components/homePage/Reviewsection";
import Pricesection from "@/components/homePage/Pricesection";
import Questionsection from "@/components/homePage/Questionsection";
import Lastsection from "@/components/homePage/Lastsection";
import Footer from "@/components/homePage/Foooter";
import { cn } from "@/lib/utils";
import NavbarUser from "@/components/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const ibm_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

const layout: FC<layoutProps> = ({ children }) => {
  //   const { isLoggedIn } = useAuthContext();
  //   console.log(isLoggedIn, "eieifoobar");
  return (
    <>
      <NavbarUser />
      {children}
    </>
  );
};

export default layout;
