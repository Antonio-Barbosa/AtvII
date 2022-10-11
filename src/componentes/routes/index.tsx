import { type } from "@testing-library/user-event/dist/type";
import { Component, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Cadastros from "../cadastro/cadastro";
import AtualizaCliente from "../clientes/atualizaCliente";
import Cliente from "../clientes/Clientes";
import FormularioCadastroCliente from "../clientes/formularioCadastroCliente";
import ListaCliente from "../clientes/listaCliente";
import Listagens from "../listagens/listagens";
import ListaPedido from "../pedidos/listaPedido";
import Pedido from "../pedidos/pedido";
import RealizarPedido from "../pedidos/realizarPedido";
import AtualizaProduto from "../produtos/atualizaProduto";
import CadastroProdutos from "../produtos/cadastroProdutos";
import ListaProduto from "../produtos/listaProduto";
import Produto from "../produtos/produtos";
import AtualizaServico from "../servicos/atualizaServico";
import CadastroServicos from "../servicos/cadastroServicos";
import ListaServicos from "../servicos/listaServicos";
import Servicos from "../servicos/servicos";


type state = {

}

export default class AppRoutes extends Component <{}, state>{
    constructor(props:{}| Readonly <{}>){
        super(props)
        this.state = {
            tela:'Home'
        }
    }

    render(){
        
        return(
            <Routes>
                <Route path="/" element={<Cadastros tema="black lighten-2"/>}/>
                <Route path="/Home" element={<Cadastros tema="black lighten-2"/>}/>
                <Route path="/Produtos" element={<ListaProduto tema="black lighten-2"/>}/>
                <Route path="/Servicos" element={<ListaServicos tema="black lighten-2"/>}/>
                <Route path="/Clientes" element={<ListaCliente tema="black lighten-2"/>}/>
                <Route path="/Pedidos" element={<ListaPedido tema="black lighten-2"/>}/>
                <Route path="/CadastroCliente" element={<FormularioCadastroCliente tema="black lighten-2"/>}/>
                <Route path="/CadastroProduto" element={<CadastroProdutos tema="black lighten-2"/>}/>
                <Route path="/CadastroServico" element={<CadastroServicos tema="black lighten-2"/>}/>
                <Route path="/CadastroPedido" element={<RealizarPedido tema="black lighten-2"/>}/>
                <Route path="/Cliente" element={<Cliente tema="black lighten-2"/>}/>
                <Route path="/Produto" element={<Produto tema="black lighten-2"/>}/>
                <Route path="/Servico" element={<Servicos tema="black lighten-2"/>}/>
                <Route path="/Listagens" element={<Listagens tema="black ligthen-2" />}/>
                <Route path="/Pedido" element={<Pedido tema="black ligthen-2"/>}/>
                <Route path="/AtualizaCliente" element={<AtualizaCliente tema="black ligthen-2>"/>}/>
                <Route path="/AtualizaProduto" element={<AtualizaProduto tema="black ligthen-2>"/>}/>
                <Route path="/AtualizaServico" element={<AtualizaServico tema="black ligthen-2>"/>}/>

                
    
    
            </Routes>
        )
    }
}
