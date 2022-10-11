import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../cadastro/cadastro.css"
import M from 'materialize-css'
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class Cadastros extends Component<props>{
    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }
    render() {
        return (
            <div className="containerCad">
                <h2>Cadastro</h2>
                <div className="collection home">
                    <Link to={'/CadastroCliente'} className="collection-item pointer">Cadastrar Cliente</Link>
                    <Link to={'/CadastroProduto'} className="collection-item pointer">Cadastrar Produto</Link>
                    <Link to={'/CadastroServico'} className="collection-item pointer">Cadastrar Serviços</Link>
                    <Link to={'/CadastroPedido'} className="collection-item pointer">Cadastrar Pedidos</Link>
                </div>
            </div>
        )
    }
}