import React, {useState, useEffect} from 'react';
import './style.css';
import env from '../env';
import axios from 'axios';


const Registration = (props)=>{
    const [customer, setCustomer] = useState({firstName: '', lastName:'', email:'', password:'', agree:false})
    
    const handleChange = (e)=>{                
        setCustomer({
            ...customer, [e.target.name]: e.target.value
       })                 
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       try {
           const {firstName, lastName,email,password, agree} = customer;
           const customerInfo = await axios.post(`${env.api}/api/customerProfile`, {firstName, lastName, email, password, agree})
           const tokenData = customerInfo.data.data.token;
           console.log(tokenData);
           
           localStorage.setItem('tokenData', tokenData) 

           props.history.push('/profile');  
       } catch (error) {
           console.log(error);   
       }
        setCustomer({
          firstName:''
        })
    }
            useEffect(()=>{
                const token  = localStorage.getItem('tokenData')
                if(token){
                    props.history.push('/profile')
                }  
            })  
            
            
            const handleLogin = async (e)=>{
                e.preventDefault();
                try {
                    const {email, password} = customer;                    
                    const customerInfo = await axios.post(`${env.api}/api/login`, {email, password});   
                    console.log(customerInfo.data.data.token);
                    const token = customerInfo.data.data.token
                    localStorage.setItem('tokenData', token)
                    props.history.push('/profile')
                    
                    
                } catch (error) {

                    console.log(error);
                    
                    
                }
                
            }
    return(
      
        <div className="row">
              <div className="d-none d-sm-block col-sm col-md-2 col-lg-2">
                        
              </div>
             <div className= "col-sm col-md-4 col-lg-4 p-3 justify-content-center" style={{marginTop:'67px'}}>
                <form className="p-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="First name">First Name</label>
                        <input type="text" className="form-control formReg" placeholder="Enter first name" name="firstName" onChange={handleChange} value={customer.firstName}/>
                    </div>
                    <div className="form-group">
                        <label for="Last name">Last Name</label>
                        <input type="text" className="form-control formReg" placeholder="Enter last name" name="lastName" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="Email">Email</label>
                        <input type="email" className="form-control formReg" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="password" className="form-control formReg" placeholder="Enter password" name="password" onChange={handleChange}/>
                    </div>
                    
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name="agree" onChange={handleChange} checked={customer.agree}/>
                        <label class="form-check-label" for="exampleCheck1"><small>Agree to terms and service</small></label>
                    </div>
                    <input type="submit" className="btn btn-success form-control formRegButt" value="New user register" disabled={!customer.agree}/>
                </form>
                </div>
             

                <div className= "col-sm col-md-3 col-lg-3 pt-3 pl-5 pr-5" style={{marginTop:'67px', float:'right'}}>
                <form className="p-3" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label for="Email">Email</label>
                        <input type="email" className="form-control formReg" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="password" className="form-control formReg" placeholder="Enter password" name="password" onChange={handleChange}/>
                    </div>
                    <input type="submit" className="btn btn-success form-control formRegButt" value="Login"/>
                </form>
                </div>  

                   <div className="d-none d-sm-block col-sm col-md-2 col-lg-4">
                        
                </div>             

        </div>                     
    )
}

export default Registration;