import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderPropr {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderPropr) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
