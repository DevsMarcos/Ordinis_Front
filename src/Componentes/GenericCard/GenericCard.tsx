import { Card } from "@/src/Componentes/GenericCard/styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GenericCard({ children }: Props) {
  return <Card>{children}</Card>;
}
