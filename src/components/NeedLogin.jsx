import React from 'react';
import GoogeLogin from './GoogleLogin';

const NeedLogin = () => {
    return(
        <div className="container">
            <div className="row">
                <h3 className="text-center mx-auto">
                    Você Precisa Logar pra acessar essa parte da aplicação.
                </h3>
            </div>
            <div className="row">
                <button className="text-center mx-auto btn btn-outline-primary btn-lg">
                    <GoogeLogin/>
                </button>
            </div>
        </div>
    );
} 

export default NeedLogin;