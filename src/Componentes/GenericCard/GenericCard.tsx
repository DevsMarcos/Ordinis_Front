import { Card } from "@/src/Componentes/GenericCard/styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  align?: "left" | "center" | "right";
}

export default function GenericCard({ children, align = "center" }: Props) {
  return <Card textAlign={align}>{children}</Card>;
}
