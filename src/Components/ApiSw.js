import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ApiSw = (props) => {
    const [personajes, setPersonajes] = useState([]);
    const [recurso, setRecurso] = useState(null)
    const [idfilm, setIdfilm] = useState(0)
    const [idplaneta, setIdplaneta] = useState(0)
    const [idpersonaje, setIdpersonaje] = useState(0)
    const [idespecie, setIdespecie] = useState(0)
    const [idnave, setIdnave] = useState(0)
    const [idvehiculo, setIdvehiculo] = useState(0)
    const [atributos1, setAtributos1] = useState([])
    const [atributos2, setAtributos2] = useState([])
    const [atributos3, setAtributos3] = useState([])
    const [atributos4, setAtributos4] = useState([])
    const [atributos5, setAtributos5] = useState([])
    const [atributos6, setAtributos6] = useState([])
    const [error, setError] = useState(0)
    const [iderror, setIderror] = useState(0)
    
    const onChangeFunc = (e) =>{
        const recur = e.target.value
        setRecurso(recur)
        //console.log(recurso, "recursoooooziiiiii")               
    }
    const imageClick = () =>{
        setError(0)
    }
    const onSubmitfilm = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos1([])
console.log(idfilm,"N° film ingresado")
            axios.get(recurso+idfilm)
           .then(response => setAtributos1(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
           //console.log(atributos1, "atributos1 film seleccionado")
    }
    const onSubmitplaneta = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos2([])
console.log(idplaneta,"N° planeta ingresado")
            axios.get(recurso+idplaneta)
           .then(response => setAtributos2(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
           //console.log(atributos2, "atributos2 planeta seleccionado")
    }
    const onSubmitpersonaje = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos3([])
console.log(idpersonaje,"N° personaje ingresado")
            axios.get(recurso+idpersonaje)
           .then(response => setAtributos3(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
           //console.log(atributos3, "atributos3 personaje seleccionado")
    }
    const onSubmitespecies = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos4([])
console.log(idespecie,"N° especie ingresado")
            axios.get(recurso+idespecie)
           .then(response => setAtributos4(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
           //console.log(atributos4, "atributos4 especie seleccionado")
    }
    const onSubmitnave = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos5([])
console.log(idnave,"N° nave ingresado")
            axios.get(recurso+idnave)
           .then(response => setAtributos5(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
           //console.log(atributos5, "atributos5 nave seleccionado")
    }
    const onSubmitvehiculo = (e) =>{
        e.preventDefault();
        setError(0)
        //setAtributos6([])
        
console.log(idvehiculo,"N° vehiculo ingresado")
            axios.get(recurso+idvehiculo)
           .then(response => setAtributos6(response.data,"lo que trae la API")).catch(error=>setError(error.response.status,"errorr"))
        
           
           
           //console.log(atributos6, "atributos6 vehiculo seleccionado")
    }

   
          

    useEffect(()=>{
       
        
        },[idfilm, idplaneta, idpersonaje, idespecie, idnave, idvehiculo])

 
useEffect(()=>{
    console.log(error,"error en el effect")
},[recurso,error])
useEffect(()=>{
    console.log(atributos1,"film desde el useeffect")
},[atributos1])
useEffect(()=>{
    console.log(atributos2,"planeta desde el useeffect")
},[atributos2])
useEffect(()=>{
    console.log(atributos3,"personaje desde el useeffect")
},[atributos3])
useEffect(()=>{
    console.log(atributos4,"especie desde el useeffect")
},[atributos4])
useEffect(()=>{
    console.log(atributos5,"nave desde el useeffect")
},[atributos5])
useEffect(()=>{
    console.log(atributos6,"vehiculo desde el useeffect")
},[atributos6])

//console.log(recurso,"recurso afuera del useeffect")
    useEffect(() => {
         //fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40')
            //.then(response => response.json())
            //.then(response => setPokemones(response.results)).catch(error=>console.log(error,"errorr"))
            axios.get('https://swapi.dev/api/')
            //La respuesta de axios es diferente, por que trae una estructura diferente de onjetos (por eso se agrega el .data)
            .then(response => setPersonajes(response.data)).catch(error=>console.log(error,"errorr"))
            //setPokemones(response.results)?offset=20&limit=40
        //console.log(personajes, "personajes desde useEffect")
    }, []);
// console.log(personajes, "personajes")
 let pers = Object.keys(personajes)

 //console.log(pers, "keyssss")
 //console.log(useHistory(),"useHistory")

    return (
        <div>
            <form>
           
            <select name='recursos' onChange={(e)=>onChangeFunc(e)}>
                   {
               pers.length > 0 && pers.map((per,i)=>(
                   
                 <option key={i} value={"https://swapi.dev/api/"+per+"/"}>   
                        
                        {per}
                </option>
                ) )
               }
                </select>
            </form>
            
               { recurso!==null && recurso==="https://swapi.dev/api/films/" && error===0?
               
                <div>
              <form onSubmit={onSubmitfilm}>
                    <label htmlFor="tentacles">Ingresa un id del 1 al 6 para seleccionar un films:</label>
                    <input type="number"  name="tentacles" min="1" max="6" id="0" value={idfilm} onChange={(e)=>setIdfilm(e.target.value)}/>
                    <button type="submit"  >Buscar</button>
                </form>
                <Link to={`/${atributos1.title}`}>
                        {atributos1.title}
                    </Link> 
                <h2>{atributos1.title}</h2>
                {
                    idfilm!==0 && atributos1.director!==undefined?
                        <div>
                   <h4>{"Director: " + atributos1.director}</h4>
                   <h4>{"Episodio: " + atributos1.episode_id}</h4>
                   <h4>{"Productor: " + atributos1.producer}</h4>
                   <h4>{"Lanzamiento: " + atributos1.release_date}</h4>
                   </div>:
                    
                        console.log("jojojo")
                    
                }
                </div>:
                recurso!==null && recurso==="https://swapi.dev/api/planets/" && error===0?
                
                <div>
                    <form onSubmit={onSubmitplaneta}>
                    <label htmlFor="tentacles">Ingresa un id del 1 al 60 para seleccionar un planeta:   id  </label>
                    <input type="number" id="1" name="tentacles" min="1" max="60" value={idplaneta}  onChange={(e)=>setIdplaneta(e.target.value)}/>
                    <button type="submit"  >Buscar</button>
                    </form>
                    <Link to={`/${atributos2.names}`}>
                        {atributos2.name}
                    </Link> 
                    <h2>{atributos2.name}</h2>
                    {
                    idplaneta!==0 && atributos2.climate!==undefined?
                        <div>
                   <h4>{"Periodo Orbital: " + atributos2.orbital_period}</h4>
                   <h4>{"Clima: " + atributos2.climate}</h4>
                   <h4>{"Diametro: " + atributos2.diameter}</h4>
                   <h4>{"Terreno: " + atributos2.terrain}</h4>
                   </div>:
                    
                    console.log("jojojo")
                
                    }
                </div>:
               recurso!==null && recurso==="https://swapi.dev/api/people/" && error===0?
               
               <div>
                   <form onSubmit={onSubmitpersonaje}>
                   <label htmlFor="tentacles">Ingresa un id del 1 al 82 para seleccionar un personaje:   id  </label>
                   <input type="number" id="2" name="tentacles" min="1" max="82" value={idpersonaje} onChange={(e)=>setIdpersonaje(e.target.value)}/>
                   <button type="submit"  >Buscar</button>
                   </form>
                   <Link to={`/${atributos3.name}`}>
                        {atributos3.name}
                    </Link> 
                    {
                    idpersonaje!==0 && atributos3.name!==undefined?
                        <div>
                   <h4>{"Edad: " + atributos3.birth_year}</h4>
                   <h4>{"Masa: " + atributos3.mass}</h4>
                   <h4>{"Altura: " + atributos3.height}</h4>
                   <h4>{"Color de piel: " + atributos3.skin_color}</h4>
                   </div>:
                    
                    console.log("jojojo")
                
                    }
               </div>:
               recurso!==null && recurso==="https://swapi.dev/api/species/" && error===0?
               <div>
                   <form onSubmit={onSubmitespecies}>
                   <label htmlFor="tentacles">Ingresa un id del 1 al 37 para seleccionar una especie:   id  </label>
                   <input type="number" id="3" name="tentacles" min="1" max="37" value={idespecie} onChange={(e)=>setIdespecie(e.target.value)} />
                   <button type="submit"  >Buscar</button>
                   </form>
                   <Link to={`/${atributos4.name}`}>
                        {atributos4.name}
                    </Link> 
                   <h2>{atributos4.name}</h2>
                   {
                    idespecie!==0 && atributos4.name!==undefined?
                        <div>
                   <h4>{"Clasificacion: " + atributos4.classification}</h4>
                   <h4>{"Designacion: " + atributos4.designation}</h4>
                   <h4>{"Altura media: " + atributos4.average_height}</h4>
                   <h4>{"Lenguaje: " + atributos4.language}</h4>
                   </div>:
                    
                    console.log("jojojo")
                   }
               </div>:
               recurso!==null && recurso==="https://swapi.dev/api/starships/" && error===0?
               <div>
                   <form onSubmit={onSubmitnave} >
                   <label htmlFor="tentacles">Ingresa un id del 1 al 36 para seleccionar una nave estelar:   id  </label>
                   <input type="number" id="4" name="tentacles" min="1" max="36" value={idnave} onChange={(e)=>setIdnave(e.target.value)}/>
                   <button type="submit"  >  Buscar</button>
                   
                   </form>
                   <Link to={`/${atributos5.name}`}>
                        {atributos5.name}
                    </Link> 
                   <h2>{atributos5.name}</h2>
                   {
                    idnave!==0 && atributos5.name!==undefined?
                        <div>
                   <h4>{"Modelo: " + atributos5.model}</h4>
                   <h4>{"Longitud: " + atributos5.length}</h4>
                   <h4>{"Pasajeros: " + atributos5.passengers}</h4>
                   <h4>{"Clase de nave: " + atributos5.starship_class}</h4>
                   </div>:
                    
                    console.log("jojojo")
                   }
               </div>:
               recurso!==null && recurso==="https://swapi.dev/api/vehicles/" && error===0?
               <div>
                   <form onSubmit={onSubmitvehiculo}>
                   <label htmlFor="tentacles">Ingresa un id del 1 al 39 para seleccionar un vehiculo:   id  </label>
                   <input type="number" id="5" name="tentacles" min="1" max="39" value={idvehiculo} onChange={(e)=>setIdvehiculo(e.target.value)}/>
                   <button type="submit"  >Buscar</button>
                   </form>
                   <Link to={`/${atributos6.name}`}>
                        {atributos6.name}
                    </Link> 
                   <h2>{atributos6.name}</h2>
                   {
                    idvehiculo!==0 && atributos6.name!==undefined?
                        <div>
                   <h4>{"Modelo: " + atributos6.model}</h4>
                   <h4>{"Fabricante: " + atributos6.manufacturer}</h4>
                   <h4>{"Capacidad: " + atributos6.cargo_capacity}</h4>
                   <h4>{"Costo: " + atributos6.cost_in_credits}</h4>
                   </div>:
                    
                    console.log("jojojo")
                   }
               </div>:
               
               error!==0?
               <div>
               <h2>Estos no son los droides que estas buscando</h2>
               
               <img src="../obiwan2.png" alt="" className="logo" onClick={() => imageClick()}/>
               <h5>Toca la imagen y continua buscando </h5>
               </div>:
               console.log(error, "error")
                }
                {console.log(error,"error abajo ")}
            
        </div>
    );
}
export default ApiSw;
//starships

/*
Statistics
People: 82

Planets: 60

Films: 6

Species : 37

Vehicles: 39

Starships: 36
*/


/*e.target.id==="0"?(id[0]=e.target.value, setIdd(id)):
        e.target.id==="1"?(id[1]=e.target.value, setIdd(id)):
        e.target.id==="2"?(id[2]=e.target.value, setIdd(id)):
        e.target.id==="3"?(id[3]=e.target.value, setIdd(id)):
        e.target.id==="4"?(id[4]=e.target.value, setIdd(id)):
        e.target.id==="5"?(id[5]=e.target.value, setIdd(id)):
        console.log("ee");*/