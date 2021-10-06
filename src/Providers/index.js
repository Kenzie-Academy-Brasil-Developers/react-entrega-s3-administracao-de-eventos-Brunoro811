import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
  return (
    <>
      <CasamentoProvider>
        <ConfraternizacaoProvider>
          <FormaturaProvider>{children}</FormaturaProvider>
        </ConfraternizacaoProvider>
      </CasamentoProvider>
      ;
    </>
  );
};
export default Providers;
