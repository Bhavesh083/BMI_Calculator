import React,{useState} from 'react'

function Calci() {
 
    const [kg, setKg] = useState(0);
    const [cm, setCm] = useState(0);
    const [val,setVal]= useState(0);
    const [cg, setCg] = useState(0);
  
    const takeKg = (e) =>{
        var kilo = e.target.value;
        setKg(kilo)
    }
    const takeCm = (e) =>{
        var centi = e.target.value/100;
        setCm(centi)
    }
    const calculate = () =>{
        var value = kg/(cm*cm)
        if (value > 18.5 && value < 24.9) {
            setCg('Normal')
        } else if (value > 25 && value < 29.9) {
            setCg('OverWeight')
        } else if(value > 29.9){
            setCg('Obesity')
        }else{
            setCg('UnderWeight')
        }
        setVal(value.toFixed(2));
    }
    return (
        <div className='calci'>
            <h3>Metric Units</h3>
            <label><b>Height (in cm) = </b></label><input type='number' onChange={e=>takeCm(e)} placeholder='...cm'/><br/>
            <label><b>Weight (in kg) = </b></label><input type='number' onChange={e=>takeKg(e)} placeholder='...kg'/><br/>
            <button onClick={()=>calculate()}>Calculate</button>
            <h4>Result {cg} :  Your BMI = {val} kg/m^2</h4>
        </div>
    )
}

export default Calci
