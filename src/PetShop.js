import React from 'react';
import PropTypes from 'prop-types';

function PetShop(props) {

    const { dogs, cats, customers, custumerName, onClick } = props

    return (
        <div>
            <h1>Cachorros: {dogs}</h1>
            <h2>Gatos: {cats}</h2>
            <div>
                Quantidade de clientes: {customers}
            </div>
            <div>
                Nome do cliente: {custumerName}
            </div>
            <button onClick={onClick} >Iniciar Banho</button>
        </div>
    )
}

PetShop.defaultProps = {
    cats: 0,
    customers: []
}

PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    custumerName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PetShop;