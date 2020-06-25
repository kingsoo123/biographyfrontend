import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import env from '../env';
import Loader from 'react-loader-spinner';
import './style.css';



class Profile extends Component{


    state={
        loading: true,
        firstName:'',
        lastName:'',
        biography:`Kingsley is an enthusiat, loves to code and when is he is not busy, he loves to read emails and books.
        He places so much value in things that are edifying and nuilds once values. He hardly bgets angry 
        and when something gets to him, he will rather talk it over just so is doesn't linger to the next day`,
        thingsToDo: `Kingsley is an enthusiat, loves to code and when is he is not busy, he loves to read emails and books.
        He places so much value in things that are edifying and builds once values. He hardly bgets angry and when something gets to him,
        he will rather talk it over just so is doesn't linger to the next.`,
        isEditable:false,
        isEditable2: false
    }
    async componentDidMount(){

        try {
            const token = localStorage.getItem("tokenData")  
            console.log(token);
                      
            if(!token){
                this.props.history.push('/');
            }else{
                setTimeout(() => {
                    this.setState({
                        loading: false
                    })
                }, 3000);
              
            }
                const customerData = await axios.get(`${env.api}/api/customerProfile`, {
                headers:{
                        Authorization:`Bearer ${token}`
                    },
                }
               )               
    
                this.setState({
                    firstName:customerData.data.data.result.firstName,
                    lastName:customerData.data.data.result.lastName
                })

        } catch (error) {
            console.log(error);
            
        } 
    }


    isEdit = ()=>{
        this.setState({
            isEditable: true
        })        
    }

    editThings = ()=>{
        this.setState({
            isEditable2:true
        })
    }

    handleBio = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,   
        })
    }

    changeBio = (e)=>{
        e.preventDefault() 
        this.setState({
            isEditable: false
        })
    }

    changeBio2 = (e)=>{
        e.preventDefault() 
        this.setState({
            isEditable2: false
        })
    }
    render(){        
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pl-5 pr-5">
            <Link to="/"><h4 style={{color:'#FFC107'}}>The Biographer</h4></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    
                </li>
                <li className="nav-item">
                    
                </li>
                <li className="nav-item">
                   
                </li>
             
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">It's good day today! {this.state.firstName}</button>
                <button className="btn btn-warning my-2 my-sm-0" type="submit" onClick={()=>{this.props.history.push('/'); localStorage.clear("tokenData")}}>Logout</button>
                </form>
            </div>
        </nav>
            {  this.state.loading === true  ?
            <div className="d-flex col-sm col-md-12 col-lg-12 justify-content-center" style={{height:'100vh', paddingTop:'70px'}}>
                 <Loader
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000}
              />
              </div> :    
              <div>
                  
              <div className="col-sm col-md-12 col-lg-12" style={{height:'100vh', paddingTop:'70px'}}>
             <div className="row m-0" style={{width:'100%', padding:'15px'}}>
                <div className="col-sm col-md-3 col-lg-3 d-flex justify-content-center pt-5 profileImg" style={{height:'340px'}}>
                    <div style={{background:'orange', height:'250px', width:'250px', borderRadius:'50%', textAlign:'center', paddingTop:'20px'}}>
                    <i className="fa fa-twitter" aria-hidden="true" style={{fontSize:'200px', color:'white'}}></i>
                    </div>
                </div>
                <div className="col-sm col-md-6 col-lg-6 pt-5 profileImg" style={{height:'340px'}}>
                    <h1 style={{color:'orange'}}>{this.state.firstName} {this.state.lastName}</h1>
                    <p style={{color:'orange'}}>Software Developer    |    Technology Consultant</p>
                    <h6 style={{color:'orange'}}>Things I Like To Do</h6>
                    {
                          this.state.isEditable2 === true ?<form onSubmit={this.changeBio2} >
                          <textarea name="thingsToDo" rows="4" cols="50" className="form-control" onChange={this.handleBio} placeholder="Edit things you like doing"></textarea><br/>
                          <button className="btn btn-warning form-control">Submit</button>
                          </form>
                      :
                      <p style={{color:'orange', cursor:'pointer'}} title="Edit me" onClick={this.editThings}>{this.state.thingsToDo}</p>
                    }
                    
                </div>
                <div className="col-sm col-md-3 col-lg-3 d-flex justify-content-center" style={{height:'340px', paddingTop:'100px'}}>
                <i className="fa fa-twitter" aria-hidden="true" style={{fontSize:'60px', color:'orange', marginTop:'30px'}}></i>
                <i className="fa fa-linkedin" aria-hidden="true" style={{fontSize:'60px', color:'orange', marginLeft:'20px', marginTop:'30px'}}></i>
                <i className="fa fa-github" aria-hidden="true" style={{fontSize:'60px', color:'orange', marginLeft:'20px', marginTop:'30px'}}></i>
                </div>
             </div>
             <div className="row m-0 d-flex justify-content-center" style={{width:'100%',padding:'30px'}}>
                    
                    <div className="col-sm col-md-10 col-lg-10 p-3 bio">
                    <h3 style={{color:'orange'}}>My Biography</h3>
                    {
                        this.state.isEditable === true ?<form onSubmit={this.changeBio} >
                            <textarea name="biography" rows="4" cols="50" className="form-control" onChange={this.handleBio} placeholder="Edit your Biography"></textarea><br/>
                            <button className="btn btn-warning form-control">Submit</button>
                            </form>
                        :
                        <p style={{color:'orange', cursor:'pointer'}} title="Edit me" onClick={this.isEdit}>{this.state.biography}</p>

                    }

                    

                       
                    </div>
             </div>
              </div>
            </div>
            }
            
         
            </>
        )
    }
}


export default Profile;