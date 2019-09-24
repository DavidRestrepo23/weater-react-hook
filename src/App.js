import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import WeatherInfo from './components/WeatherInfo';


const style = {
  textAlign: 'center',
  padding: '30px',
  fontSize: '30px'
}

function App() {

  //state
  const [city, setCity]       = useState('');
  const [country, setCountry] = useState(''); 
  const [error, setError]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  const getDataForm = (data) => {
    
    if(data.city === '' || data.country === '') {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

   //---- cambios en el state

   useEffect(() => {

    if(city === '' ) return;

      const getInfoApi = async () => {
        let token = '6ed10432dbea59b34fa587154ae6ef3f';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${token}`;
        
        setLoading(true);

        const response = await fetch(url);
        const weatherInfo   = await response.json();

        setLoading(false);

        setWeatherInfo(weatherInfo);

      }

    getInfoApi();

  }, [city, country]); //cuado tengamos un cambios en el state de city o country se ejecutara la funcion getInfoApi

  

  let component;

  if(error){
    const msj = "Ambos campos son obligatorios";
    component = <Error message={msj} />
  }else{
      if(Object.keys(weatherInfo).length > 0) {
        component = <WeatherInfo weatherInfo={weatherInfo} /> 
      }
  }

  return (
    <div className="App">
        <Header />
        
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col sm12 m12">
                <Form 
                    getDataForm={getDataForm}
                    loading={loading}
                />
              </div>
              
            </div>
          </div>
        </div>
         {loading ?
          <div className="col sm12 m12" style={style}>
              <i className="fa fa-spinner fa-spin"></i> 
          </div>
          :
          null
         }
        <div className="sm12 m12">
          {component}
        </div>
    </div>
  );
}

export default App;
