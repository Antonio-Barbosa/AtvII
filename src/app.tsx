import { BrowserRouter } from "react-router-dom";
import BarraNavegacao from "./componentes/barraNavegacao";
import AppRoutes from "./componentes/routes";

export const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao tema="purple lighten-4" botoes={['Home', 'Produtos', 'Servicos', 'Clientes', 'Listagens', 'Pedidos']} />
            <AppRoutes />
        </BrowserRouter>
    );
}


