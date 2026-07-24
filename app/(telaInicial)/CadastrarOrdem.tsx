import { ButtonsArea } from "@/src/styles/autenticacao/autenticacaoStyle";
import {
    GenericText,
    GlobalContainer,
    Input,
    InputArea,
} from "@/src/styles/globalStyle";
import { StyledButton, TextButton } from "@/src/styles/indexStyle";
import { Container, StyledScrollView } from "@/src/styles/telaInicial/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import { z } from "zod";

type FormData = {
  nomeDoCliente: string;
  telefone: string;
  produto: string;
  marca: string;
  modelo: string;
  defeito: string;
};

const schema = z.object({
  nomeDoCliente: z.string().min(1, "Nome é obrigatório"),
  telefone: z.string(),
  produto: z.string().min(1, "Produto é obrigatório"),
  marca: z.string().min(1, "Marca é obrigatório"),
  modelo: z.string(),
  defeito: z.string().min(1, "Defeito é obrigatório"),
});

export default function CadastrarOrdem() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <GlobalContainer>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <StyledScrollView>
            <GenericText marginBottom={40} tamanho={24}>
              Cadastrar Ordem
            </GenericText>

            <InputArea>
              <GenericText paddingLeft={10}>Nome do Cliente</GenericText>
              <Controller
                control={control}
                name="nomeDoCliente"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Informe o nome do cliente"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.nomeDoCliente && (
                <GenericText>{errors.nomeDoCliente.message}</GenericText>
              )}
            </InputArea>

            <InputArea>
              <GenericText paddingLeft={10}>Numero de telefone</GenericText>
              <Controller
                control={control}
                name="telefone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Informe o número de telefone do cliente"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="phone-pad"
                  />
                )}
              />
              {errors.telefone && (
                <GenericText>{errors.telefone.message}</GenericText>
              )}
            </InputArea>

            <InputArea>
              <GenericText paddingLeft={10}>Tipo do equipamento</GenericText>
              <Controller
                control={control}
                name="produto"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Informe o Tipo do equipamento"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.produto && (
                <GenericText>{errors.produto.message}</GenericText>
              )}
            </InputArea>

            <InputArea>
              <GenericText paddingLeft={10}>Marca do Equipamento</GenericText>
              <Controller
                control={control}
                name="marca"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Digite a marca do equipamento"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.marca && (
                <GenericText>{errors.marca.message}</GenericText>
              )}
            </InputArea>

            <InputArea>
              <GenericText paddingLeft={10}>Modelo do equipamento</GenericText>
              <Controller
                control={control}
                name="modelo"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Digite o Modelo do equipamento"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.modelo && (
                <GenericText>{errors.modelo.message}</GenericText>
              )}
            </InputArea>

            <InputArea>
              <GenericText paddingLeft={10}>Defeito</GenericText>
              <Controller
                control={control}
                name="defeito"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={"Informe o defeito do equipamento"}
                    height={150}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    multiline
                  />
                )}
              />
              {errors.defeito && (
                <GenericText>{errors.defeito.message}</GenericText>
              )}
            </InputArea>

            <ButtonsArea>
              <StyledButton>
                <TextButton>Adicionar Fotografia</TextButton>
              </StyledButton>
            </ButtonsArea>
            <ButtonsArea>
              <StyledButton
                onPress={handleSubmit(onSubmit, (errors) => {
                  console.log("Erros de validação:", errors);
                })}
              >
                <TextButton>Salvar Ordem de Serviço</TextButton>
              </StyledButton>
            </ButtonsArea>
          </StyledScrollView>
        </KeyboardAvoidingView>
      </Container>
    </GlobalContainer>
  );
}
