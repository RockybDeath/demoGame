import * as React from "react";
import {browserHistory, Link} from "react-router";
import loadImage from "../img/load.gif"

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.registerError=this.registerError.bind(this);
        this.restApiRegister = this.restApiRegister.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            errorMessage: "",
            load: "hidden",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            active: true
        };
    }
    checkNick(nick) {
        return !(nick == null || nick === "" || nick === " " || typeof (nick) == "undefined");
    }
	componentDidMount(){
        // let data = {"username": "test_super", "password": "Nf<U4f<rDbtDxAPn" }
        // fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'accept': "application/json"
        //         "Authorization": "Basic "+localStorage.getItem("Token")
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json()).then( (result) => { 
        //     console.log(result)
        //     }, (error) => {
        //     });
    }
    registerError(){
        this.setState({
            errorMessage:"Регистрация не удалась"
        })
    }
    restApiRegister(event){
        event.preventDefault();
        // Username: test_super
        // Password: Nf<U4f<rDbtDxAPn
        if(this.checkNick(this.state.username)&&
           this.checkNick(this.state.password)){
            const data={ "username":this.state.username,"password": this.state.password, 
            "first_name": this.state.firstName, "last_name": this.state.lastName,
            "is_active": this.state.active};
            this.setState({
                load: "visible"
            })
            fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+localStorage.getItem("Token")
                },
                body: JSON.stringify(data)
            })
            .then(res => res.ok ? res : Promise.reject(res))
            .then( res => res.json())
            .then( (res) => { 
                this.setState({
                    load: "hidden",
                    errorMessage: ""
                });
                localStorage.setItem("id", res.id);
                browserHistory.push("/register")})
            .catch((error) => {
                console.log(error)
                let message = ""
                if(error.status === 400 ) message = "Wrong form"
                else message = "Error"
                this.setState({
                    load: "hidden",
                    errorMessage: message
                })
            })
        }
        else this.setState({
            errorMessage: "Incorect data"
        });
    }
    handleUserInput(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return(
            <div>
            <div className="block-signIn">
                <img className="loader" style={{visibility:this.state.load}} src={loadImage} alt="Load"></img>
                <h1>Register</h1>
                <form onSubmit={this.restApiRegister} className="form-signIn">
                    <input onChange={this.handleUserInput} autoComplete="off" type="text" placeholder="Type your username" name="username"/>
                    <input onChange={this.handleUserInput} autoComplete="off" type="password" placeholder="Type your password" name="password"/>
                    <input onChange={this.handleUserInput} autoComplete="off" type="text" placeholder="Type your first name" name="firstName"/>
                    <input onChange={this.handleUserInput} autoComplete="off" type="text" placeholder="Type your last name" name="lastName"/>
                    <button className="form-submitBtn" onClick={() => this.restApiRegister}>Register</button>
                    <p className="errorMessage">{this.state.errorMessage}</p>
                    <div className="form-signIn blockLink">
                        <Link className="form-signIn__linkRegister" to="/login">
                            Already have account? Click here
                        </Link>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
