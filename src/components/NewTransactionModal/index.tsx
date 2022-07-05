import Modal from "react-modal";
import { Container, TrasactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionProps {
  isOpen: boolean;
  onTransactionClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onTransactionClose,
}: NewTransactionProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onTransactionClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onTransactionClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"></img>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TrasactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"></img>
            <span>Saída</span>
          </RadioBox>
        </TrasactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
