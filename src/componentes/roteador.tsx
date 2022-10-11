import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Cadastros from "./cadastro/cadastro";
import ListaCliente from "./clientes/listaCliente";
import ListaProduto from "./produtos/listaProduto";
import ListaServicos from "./servicos/listaServicos";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)

    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })

    }

    render() {
        let barraNavegacao = <BarraNavegacao tema="black lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />

        //para ir para tela de cadastro de cliente
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastros tema="black lighten-2" />
                </>
            )
        }

        //lista de cliente
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="black lighten-2" />
                </>
            )
        }

        //lista de produtos
        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="black lighten-2" />
                </>
            )
        }

        //lista de serviços

        if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="black lighten-2" />
                </>
            )
        }












    }
}