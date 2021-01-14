import * as React from "react";
import {browserHistory} from "react-router";
import {Link} from "react-router";
import loadImage from "../img/load.gif"
import classnames from 'classnames';
import {Races} from "./races";
import {Map} from "./map";
const data = [{name: "orks", race_description: "dwdwdwd"}];
export class Game extends React.Component{
    constructor(props) {
        super(props);
        this.showComponent = this.showComponent.bind(this);
        this.showMap = this.showMap.bind(this);
        this.state = {
            races: true,
            map: false,
            dataRaces: data,
            // races: false,
            // map: true,
            chooseRace: "orks"
        };
    }
    componentDidMount(){
        fetch("/hero/races",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res => res.json())
        .then( (res) => { 
            console.log(res);
            this.setState({
                dataRaces: res
            })
        })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    showComponent(){
        if(this.state.races) return <Races races={this.state.dataRaces} showMap={this.showMap}/>
        if(this.state.map) return <Map race={this.state.chooseRace}/>
    }
    showMap(race){
        this.setState({
            races: false,
            map: true,
            chooseRace: race
        })
    }
    render(){
        return(
            <div className="game-container">
                <header className="header-container">
                    {this.state.races ? <p className="text-center-header">Select race</p> : null}
                    {this.state.map ? <p className="text-center-header">Map</p> : null}
                </header>
                <this.showComponent></this.showComponent>
            </div>
        )
    }
}