import * as React from "react";
import loadImage from "../img/load.gif"
import Userdata from "./UserData"
import ActiveUser from "./ActiveUser"
import SearchUser from "./SearchUser"
import SortUsers from "./SortUsers";
import classnames from 'classnames';

export class Users extends React.Component{
    constructor(props) {
        super(props);
        this.showUsers = this.showUsers.bind(this)
        this.updateData = this.updateData.bind(this)
        this.sort = this.sort.bind(this)
        this.state = {
            load: "hidden",
            errorMessage: "",
            data: [],
            filterData: [],
            active: 0,
            term: "",
            id: true
        };
    }
    updateData(config){
        this.setState(config)
    }
    showUsers(){
        // Username: test_super
        // Password: Nf<U4f<rDbtDxAPn
        this.setState({
            load: "visible"
        })
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
            this.setState({
                load: "hidden",
                errorMessage: "",
                data: res,
                filterData: res,
            });
            })
        .catch((error) => {
            let message = ""
            if(error.status === 401 ) message = "Please authorized"
            else message = "Error"
            this.setState({
                load: "hidden",
                errorMessage: message
            })
        })
    }
    sort() {
        let direction = this.state.id ? 1 : -1
        
        let data = [].slice.call(this.state.data).sort((a, b) => {
            if (a["id"] === b["id"]) { return 0; }
            return a["id"] > b["id"] ? direction : direction * -1;
        });
        this.setState({
            data: data,
            id: !this.state.id
        })
    }
    render(){
        return(
            <div className="users-content">
                <img className="loaderForTable" style={{visibility:this.state.load}} src={loadImage} alt="Load"></img>
                <button className="table-btn submitBtn" onClick={() => this.showUsers()}>Show users</button>
                <p className="errorForTable">{this.state.errorMessage}</p>
                <div className="users-content__instruments">
                    <div className="users-content__instruments log">
                        <SortUsers id={this.state.id} data={this.state.data} filterData={this.state.filterData} updateData={this.updateData}/>
                        <SearchUser data={this.state.filterData} update={this.updateData} term={this.state.term}/>
                    </div>
                </div>
                <div className="user-info">
                    <ActiveUser data={this.state.data} active={this.state.active}/>
                    <div className="users-table">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th className="users-table-column id-sort" onClick={this.sort}>
                                    Id
                                    <svg className={classnames("bi bi-chevron-up svg-icon",{'svg-down': !this.state.id},{'svg-up': !(this.state.data.length === 0)})} width="18" height="18" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                    </svg>
                                    </th>
                                    <th className="users-table-column">Username</th>
                                    <th className="users-table-column">First name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((user, index) =>{
                                return (<Userdata user={user} key={user.id} index={index} updateData={this.updateData}/>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}