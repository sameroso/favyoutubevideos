import React from 'react';
import { Link } from 'react-router-dom';

const NeedLogin = () => {
    return(
        <div className="container">
            <div className="row">
                <h3 className="text-center mx-auto">
                    Você não possui nenhum víedeo na lista
                </h3>
            </div>
            <div className="row">
                <button className="text-center mx-auto btn btn-outline-primary btn-lg">
                    <Link to="/">Go Search</Link>
                </button>
            </div>
        </div>
    );
} 

export default NeedLogin;