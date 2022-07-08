import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactionsContext";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.total += transaction.amount;
        acc.deposits += transaction.amount;
        return acc;
      }

      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
