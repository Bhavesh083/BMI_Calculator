import Calci from './Calci';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header>
       <div className='info'>
        <h1>BMI Calculator</h1>
        <h4>
            Body mass index, or BMI, is one way a person can check if their weight is healthy or not.
        </h4>
        <h5> Body mass index (BMI) is a value derived from the mass (weight) and height of a person.</h5>
        <h5>
            The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m^2,<br/> resulting from mass in kilograms and height in metres.
        </h5>
        <h4>A high BMI can be an indicator of high body fatness.</h4>
       </div>
        <div className='formula'>
            <h3 className='hd'>Formula :</h3>
                <h3>BMI = m / (h * h)</h3>
            <h4>
                <ul>
                   <li>BMI = body mass index</li>
                   <li>m = mass (in kg)</li>
                   <li>h = height (in meters)</li>
                </ul>
            </h4>
        </div>
      </header>

      <content>
                <Calci/>
      </content>

      <footer>
        <table>
               <caption>BMI Categories</caption>
               <tr>
                   <th>Category:</th>
                   <th>BMI range</th>
               </tr>
               <tr>
                   <td>Severe Thinness:</td>
                   <td>Less than 16</td>
               </tr>
               <tr>
                   <td>Moderate Thinness:</td>
                   <td>16 - 17</td>
               </tr>
               <tr>
                   <td>Mild Thinness:</td>
                   <td>17 - 18.5</td>
               </tr>
               <tr>
                   <td>Normal Weight:</td>
                   <td> 18.5 - 24.9</td>
               </tr>
               <tr>
                   <td>Over Weight:</td>
                   <td>25 - 29.9</td>
               </tr>
               <tr>
                   <td>Obesity:</td>
                   <td>30.0 or greater</td>
               </tr>
        </table>
      </footer>
    </div>
  )
}

export default App;
