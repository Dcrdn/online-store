import {INCREMENT_HATS,INCREMENT_TSHIRTS,INCREMENT_PANTS,INCREMENT_TOTALHATS,INCREMENT_TOTALPANTS,INCREMENT_TOTALTSHIRTS,TOTAL} from '../actions/types';

export function fetchCostos(articulo, totalQty, incrementType) {
  var incrementsHelper={INCREMENT_PANTS:[INCREMENT_TOTALPANTS,0],
            INCREMENT_TSHIRTS:[INCREMENT_TOTALTSHIRTS,1],
            INCREMENT_HATS:[INCREMENT_TOTALHATS,2]
  };
  return (dispatch) => {
    dispatch({
      type: incrementType
    });
    return fetchCostoProductos(articulo,totalQty[incrementsHelper[incrementType][1]]+1).then(([response, json]) =>{
        if(response.status === 200){
          dispatch({type: incrementsHelper[incrementType][0], payload:json});

          fetchTotal(articulo,totalQty).then(([response, json]) =>{
                if(response.status === 200){
                dispatch({type: TOTAL, payload:json});
              }
              else{
                  console.log("error tratando de obtener el total");
              }
          });
      }
      else{
        console.log("error tratando de obtener un precio de un artículo");
      }
    });
}
}

function fetchCostoProductos(tipo, dato) {
  const headers= new Headers();
  headers.append('Content-Type','application/json');
  const api={'T-Shirt':["http://localhost:3001/totalTshirts", {method : 'POST', headers, body:JSON.stringify({"Tshirt":dato})}],
        'Pants':["http://localhost:3001/totalPants", {method : 'POST',headers, body:JSON.stringify({"Pants":dato})}],
        "Hat":["http://localhost:3001/totalHats", {method : 'POST',headers, body:JSON.stringify({"Hats":dato})}]};
  
  const URL = api[tipo][0];
  return fetch(URL, api[tipo][1])
     .then( response => Promise.all([response, response.json()]));
}

function fetchTotal(tipo, dato){
    const listaDatos=[];
    for(var i=0;i<dato[0];i++){
      listaDatos.push("Pants");
    }
    for(var i=0;i<dato[1];i++){
      listaDatos.push("T-Shirt");
    }
    for(var i=0;i<dato[2];i++){
      listaDatos.push("Hat");
    }
    switch(tipo){
      case "Pants":
        listaDatos.push("Pants");
        break;
      case "T-Shirt":
        listaDatos.push("T-Shirt");
        break;
      case "Hat":
        listaDatos.push("Hat");
        break;
      default:
        break;
    }

  const headers= new Headers();
  headers.append('Content-Type','application/json');
  const parameters= {method : 'POST', headers, body:JSON.stringify({"items":listaDatos})};

  const URL = "http://localhost:3001/total";
  return fetch(URL, parameters)
     .then( response => Promise.all([response, response.json()]));
}
