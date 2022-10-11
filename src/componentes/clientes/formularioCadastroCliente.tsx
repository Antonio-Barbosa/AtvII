import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import "../clientes/cadastroCliente.css"

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    } 
    render() {
        let estiloBotao = `btn waves-effect waves-light black  ${this.props.tema}`
        
        return (
            <div className="containerCli">
                <div className="row ">
                    <h4>Cadastro do Cliente</h4>
                    <form className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nomeSocial" type="text" className="validate" />
                                <label htmlFor="nomeSocial">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <select>
                                    <option value="" disabled selected>M: Masc. / F: Fem.</option>
                                    <option value="1">M</option>
                                    <option value="2">F</option>
                                </select>
                                <label>Gênero</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Telefone" type="text" className="validate"/>
                                <label htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s6 ">
                                <input id="RG" type="text" className="validate" />
                                <label htmlFor="RG">RG</label>
                            </div>                          
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center ">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}