import React from "react";


const SECURITY_CODE = 'paradigma'

function UseState({name}){
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        })
    }

    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true
        })
    }

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        });
    };

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        });
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed : false,
            deleted: false,
            value: '',
        })
    }
    React.useEffect(()=> {
        if(!!state.loading){
            setTimeout(()=> {
                if(state.value === SECURITY_CODE){
                    onConfirm()
                }else{
                    onError()
                }
            }, 2000);
        };
        
    }, [state.loading]);


    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
    
                <p>Por favor, escribe el código de seguridad</p>
    
                {(state.error && !state.loading) && (
                    <p>Error: el código es incorrecto</p>
                )}
    
                {state.loading && (
                    <p>Cargando...</p>
                )}
    
                <input placeholder="Código de seguridad"
                        value={state.value}
                        onChange={(event)=> {
                            onWrite(event.target.value)
                        }}
                />
                <button
                    onClick={() => {
                        onCheck()
                    }}
                >Comprobar</button>
            </div>
        )
    }else if(!!state.confirmed && !state.deleted){
        return(
            <div>
                <p>¿Seguro quieres eliminar UseState?</p>
                <button
                    onClick={() => {
                        onDelete()
                    }}
                >Si, eliminar</button>
                <button
                    onClick={() => {
                        onReset()
                    } 
                }
                >No, volver</button>
            </div>
        );
    }else{
        return(
            <div>
                <h2>UseState fue eliminado</h2>
                <button
                    onClick={() => {
                            onReset()
                        }}
                >Recuperar UseState</button>
            </div>
        )
    }
    
}

export { UseState }