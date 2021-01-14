import * as React from "react";
import {browserHistory} from "react-router";
// import {Link} from "react-router-dom";
import {Link} from "react-router";
import loadImage from "../img/load.gif"
import classnames from 'classnames';

export class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.restApiSign = this.restApiSign.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            errorMessage: "",
            load: "hidden",
            username: " ",
            password: " ",
            usernameValid: false,
            passwordValid: false,
            fromValid: false,
        };
    }
    componentWillMount(){
        fetch("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Token '+localStorage.getItem("Token")
            },
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( res => res.json())
        .then( (res) => { 
            browserHistory.push("/main")
        })
        .catch((error) => {
        })
    }
    restApiSign(event){
        event.preventDefault();
        // Username: test_super
        // Password: Nf<U4f<rDbtDxAPn
        if(this.state.fromValid){
            const data={ "username":this.state.username,"password": this.state.password};
            this.setState({
                load: "visible"
            })
            fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
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
                localStorage.setItem("Token", res.token);
                browserHistory.push("/main")})
            .catch((error) => {
                let message = ""
                if(error.status === 400 ) message = "Wrong password or username"
                else message = "Error"
                this.setState({
                    load: "hidden",
                    errorMessage: message
                })
            })
        } else {
            this.validateField("username", this.state.username)
            this.validateField("password", this.state.password)
        }
    }
    handleUserInput(e){
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value}, 
            () => {this.validateField(name, value)}
        )
    }
    validateField(fieldName, value){
        switch(fieldName){
            case "password":
                this.setState({
                    passwordValid: !(/^(?=.*[A-Z])(?=.*\d).{8,128}$/).test(value)
                })
                break;
            case "username":
                this.setState({
                    usernameValid: !(/^[\w.@+-]{1,150}$/).test(value)
                })
                break;
            default:
            break;
        }
        this.setState({
            fromValid: (!(this.state.usernameValid) && !(this.state.passwordValid))
        })
    }
    render(){
        return(
            <div>
            <div className="block-signIn">
                <img className="loader" style={{visibility:this.state.load}} src={loadImage} alt="Load"></img>
                <p className="block-signIn_label">Please sign in</p>
                <form onSubmit={this.restApiSign} className="form-signIn">
                    <input className={classnames("form-signIn__input",{"has-error":this.state.usernameValid})} onChange={this.handleUserInput} autoComplete="off" type="text" placeholder="Type your username" name="username"/>
                    <input className={classnames("form-signIn__input",{"has-error":this.state.passwordValid})} onChange={this.handleUserInput} autoComplete="off" type="password" placeholder="Type your password" name="password"/>
                    <ul className="form-errors">
                        <li className={classnames("form-noerrors",{"has-error__text":this.state.usernameValid})}>Username should be 1+ characters(max - 150), only english letters and "@", "." , "+", "-", "_"</li>
                        <li className={classnames("form-noerrors",{"has-error__text":this.state.passwordValid})}>Password should be 8+ characters(max - 128), 1 capital, 1 numeric</li>
                    </ul>
                    <p className="errorMessage">{this.state.errorMessage}</p>
                    <button className="submitBtn" onClick={() => this.restApiSign}>Sign in</button>  
                    <div className="form-signIn blockLink">
                        <Link className="form-signIn__linkRegister" to="/main">
                            Go to main page
                        </Link>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}