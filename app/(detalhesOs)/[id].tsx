import { OrdemDeServicoDTO } from "@/src/interfaces/OrdemDeServico";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function DetalhesOS() {
  const { id } = useLocalSearchParams();
  const [ordem, setOdem] = useState<OrdemDeServicoDTO | null>();

  return <></>;
}
