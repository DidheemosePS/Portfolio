import { Metadata } from "next";
import ServicesClientSide from "./services";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

export default function Services() {
  return <ServicesClientSide />;
}
