/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { Link } from "react-router-dom";
import "../pedidos/pedidos.css"


type props = {
    tema: string
}

export default class RealizarPedido extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }  

    render() {
        let estilo = `collection-item active black lighten-1 ${this.props.tema}`
        return (
        <div className='container'>
            <h3 className='title'>Realizar Pedidos</h3>
                <form className="col s12 formCli">
                    <div className="row">
                        <div className="input-field col s12 opcoes">
                            <select>
                                <option value="0">Selecione o Cliente</option>
                               
                            </select>
                        </div>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select>
                            <option value="0">Selecione o Produto</option>
                           
                        </select>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select>
                        <option value="0">Selecione o Serviço</option>
                     
                        </select>
                    </div>

                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn waves-effect  black lighten-2 button" type="submit" name="action">Realizar Pedido
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    )}}
