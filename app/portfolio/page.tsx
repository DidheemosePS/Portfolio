import { Metadata } from "next";
import PortfolioClientSide from "./portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return <PortfolioClientSide />;
}
