import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false
            };
    }
    //UNSAFE_componentWillMount(){

    //}
    //componentDidMount(){

    //}
    componentDidUpdate() {
        if(!!this.state.loading) {
            setTimeout(() => {
                
                if(SECURITY_CODE === this.state.value){
                    this.setState({loading: false, error: false})
                }else{
                    this.setState({loading : false, error : true})
                }

            }, 2000)
        }
    }
    
    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p> Por favor, escribe el codigo de seguridad</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: el código es incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}

                <input
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                    }}
                    placeholder="Código de seguridad" 
                />
                <button
                onClick={() => this.setState({ loading : true})} 
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }