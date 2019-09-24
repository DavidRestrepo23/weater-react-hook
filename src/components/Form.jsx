import React, { useState } from 'react';

function Form({ getDataForm, loading }) {

 

    /* 
    * search = state , saveSearch = setState 
    * useState({}) = values initial
    */

    const [stateSearch, setSaveSearch] = useState({
        city: '',
        country: ''
    });

    const handleChange = e => {
        setSaveSearch({
            ...stateSearch,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        getDataForm(stateSearch);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" onChange={handleChange}>
                    <option value="">--Selecciona un país --</option>
                    <option value="US">Estado Unidos</option>
                    <option value="MX">Mexíco</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
               
            </div>
        </form>
    );
}

export default Form;