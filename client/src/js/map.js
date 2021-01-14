import * as React from "react";
import {browserHistory, Link} from "react-router";
import classnames from 'classnames';
import Lands from "./Lands"
import {ActiveLand} from "./ActiveLand"
import BattleResutl from "./BattleResult"
import { act } from "react-dom/test-utils";
let dataMap =[{name: "dwdwd", race: {name: "Orks", fraction:{name:"Horde"}}, id: 0, army:{power: 200}, resources:{ stones: 128, wood: 128, food: 128, gold: 128, steel: 128, stones_mining: 20, wood_mining: 20, food_mining:20, gold_mining:20, steel_mining:20} }]
let dataLeader = {name: "Trall", exp: 0, isAlive: true, char_id: {intellect:10, strength:10, agillity:10}, power: 840};
let dataArmy = {name: ""}
let resources ={ stones: 128, wood: 128, food: 128, gold: 128, steel: 128};
let battle = {date: "07-11-2020:", success: true, prisoners: 0, casualties: 0};
export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.battle = this.battle.bind(this);
        this.takeGarrison = this.takeGarrison.bind(this);
        this.getHero = this.getHero.bind(this);
        this.getProvinces = this.getProvinces.bind(this);
        this.getArmyOfHero = this.getArmyOfHero.bind(this);
        this.refreshMap = this.refreshMap.bind(this);
        this.getAllResources = this.getAllResources.bind(this);
        this.captureProvince = this.captureProvince.bind(this);
        this.armyAfterBattle = this.armyAfterBattle.bind(this);
        this.updateBattle = this.updateBattle.bind(this);
        this.resultOfBattle = this.resultOfBattle.bind(this);
        this.battleResultUpdate = this.battleResultUpdate.bind(this);
        this.giveExpForLeader = this.giveExpForLeader.bind(this);
        this.miningAll = this.miningAll.bind(this);
        this.state = {
            data: dataMap,
            leader: dataLeader,
            armyOfHero: dataArmy,
            allResources: resources,
            battle: battle,
            fraction: "",
            showResutl: true,
            active: 0,
            current: 0,
            svg: true
        };
    }
    getProvinces(){
        fetch("/map/all",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( res => res.json())
        .then( (res) => { 
            this.setState({
                data: res
            })})
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        });
    }
    getAllResources(){
        const race = {race: this.props.race}
        fetch("/fraction/getAllResources",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(race)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( res => res.json())
        .then( (res) => { 
            this.setState({
                allResources: res
            })
        })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        });
    }
    getHero(){
        const heroInfo = {race: this.props.race};
        fetch("/hero/get",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heroInfo)
            })
            .then(res => res.ok ? res : Promise.reject(res))
            .then( res => res.json())
            .then( (res) => { 
                this.setState({
                    leader: res.leader,
                    fraction: res.fraction.name
                })
                this.getArmyOfHero();
            })
            .catch((error) => {
                let message = ""
                if(error.status === 400 ) message = "Wrong password or username"
                else message = "Error"
        })
    }
    getArmyOfHero(){
        const heroInfo = {leader: this.state.leader.name};
        fetch("/army/hero",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heroInfo)
            })
            .then(res => res.ok ? res : Promise.reject(res))
            .then( res => res.json())
            .then( (res) => { 
                this.setState({
                    armyOfHero: res
                })})
            .catch((error) => {
                let message = ""
                if(error.status === 400 ) message = "Wrong password or username"
                else message = "Error"
        })
    }
    getCurrentPosition(){
        const raceInfo = {race: this.props.race};
        fetch("/map/position",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(raceInfo)
            })
            .then(res => res.ok ? res : Promise.reject(res))
            .then( res => res.json())
            .then( (res) => { 
                this.setState({
                    current: res
                })
            })
            .catch((error) => {
                let message = ""
                if(error.status === 400 ) message = "Wrong password or username"
                else message = "Error"
        })
    }
    componentDidMount(){
        this.getProvinces();
        this.getHero();
        this.getAllResources();
        this.getCurrentPosition();
    }
    refreshMap(){
        this.getProvinces();
        this.getHero();
        this.getAllResources();
    }
    updateData(config){
        this.refreshMap();
        this.setState(config)
    }
    takeGarrison(count){
        let leader = this.state.leader;
        let army = this.state.armyOfHero;
        let data = this.state.data;
        let current = this.state.current;
        if(count <= data[current].army.size) {
            const changeArmy = {leaderArmy: army.id, provinceArmy: data[current].army.id, change: count};
            this.updateData({
                data: data,
                leader: leader,
                armyOfHero: army
            })
            fetch("/army/get",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(changeArmy)
            })
            .then(res => res.ok ? res : Promise.reject(res))
            .then( (res) => { 
                this.refreshMap();
                 })
            .catch((error) => {
                let message = ""
                if(error.status === 400 ) message = "Wrong password or username"
                else message = "Error"
            })
        }
    }
    armyAfterBattle(id, count){
        const army = {id: id, count:count};
        fetch("/army/set",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(army)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( (res) => { 
            this.refreshMap();
             })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    captureProvince(){
        let data = this.state.data;
        let active = this.state.active;
        const province = {name: data[active].name, race: this.props.race}
        fetch("/map/capture",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(province)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( (res) => { 
            this.refreshMap();
             })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    updateBattle(id, battle_id, success, casualt, prisoners){
        const data = {id: id, battle_id: battle_id, success: success, cas: casualt, prisoners: prisoners};
        fetch("/battle/set",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( (res) => { 
             })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    battleResultUpdate(id, attackid, attacksuccess, attackcasualt, attackprisoners){
        let date = new Date().getTime();
        const data = {id: id, province: this.state.data[this.state.active].name, date: date};
        fetch("/result/set",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then( (res) => { 
            this.updateBattle(attackid, id, attacksuccess, attackcasualt, attackprisoners);
            this.refreshMap();
             })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    resultOfBattle(attackid, attacksuccess, attackcasualt, attackprisoners, defid, defsuccess, defcasualt, defprisoners){
        fetch("/battle/max",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res => res.json())
        .then( (res) => { 
            this.battleResultUpdate(res, attackid, attacksuccess, attackcasualt, attackprisoners);
            this.battleResultUpdate(res+1,defid, defsuccess, defcasualt, defprisoners)
        })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    miningAll(){
        fetch("/map/mining",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res => res.json())
        .then( (res) => { 
            this.refreshMap();
        })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    giveExpForLeader(){
        const hero = {name: this.state.leader.name, exp: 40};
        fetch("/hero/exp",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res => res.json())
        .then( (res) => { 
        })
        .catch((error) => {
            let message = ""
            if(error.status === 400 ) message = "Wrong password or username"
            else message = "Error"
        })
    }
    battle(){
        let battle = this.state.battle;
        let armyLeader = this.state.armyOfHero;
        let data = this.state.data;
        let active = this.state.active;
        let poteryLeader = parseInt(Number(armyLeader.size)*0.9);
        let setArmyForLeader = parseInt(Number(armyLeader.size)/10);
        let fullArmyLeader = armyLeader.size;
        let poteryProvince = parseInt(Number(data[active].army.size)/10);
        let setArmyProvince = parseInt(Number(data[active].army.size)*0.9);
        let fullArmyProvince = data[active].army.size;
        let date = new Date();
        if(data[active].power >= armyLeader.power) {
            this.resultOfBattle(armyLeader.id, false, poteryLeader, 0, data[active].army.id, true, 0, setArmyForLeader );
            this.armyAfterBattle(data[active].army.id, setArmyForLeader )
            this.armyAfterBattle(armyLeader.id, (-1)*fullArmyLeader)
            battle.success = false;
            battle.date = date.getUTCDate()+"-"+date.getMonth()+"-"+date.getUTCFullYear()+" : "+date.getUTCDay()+"-"+date.getHours()+"-"+date.getMinutes();
            battle.prisoners = fullArmyLeader;
            battle.casualties = 0;
            this.setState({ 
                battle: battle,
                showResutl: false
            });
        }
        else {
            this.resultOfBattle(armyLeader.id, true, 0, poteryProvince, data[active].army.id, false, setArmyProvince, 0);
            this.armyAfterBattle(armyLeader.id, poteryProvince)
            this.armyAfterBattle(data[active].army.id, (-1)*fullArmyProvince);
            this.captureProvince();
            this.giveExpForLeader();
            battle.success = true;
            battle.date = date.toLocaleDateString()+" --- "+date.toLocaleTimeString();
            battle.prisoners = 0;
            battle.casualties = poteryProvince;
            this.setState({
                battle: battle,
                showResutl: false,
                current : active
            })
        }
    }
    render() {
        return(
            <div>
                <div className="lands">
                    {this.state.data.map((land, index) =>{
                    return (<Lands fraction = {this.state.fraction} land={land} race = {this.props.race} index={index} key={land.name} updateData={this.updateData} active={this.state.active} current={this.state.current}/>)
                    })}
                </div>
                <div className="active-land">
                    <ActiveLand mining = {this.miningAll} resources = {this.state.allResources} race = {this.props.race} army={this.state.armyOfHero} takeGarrison={this.takeGarrison} battle={this.battle} leader={this.state.leader} svg={this.state.svg} data={this.state.data} active={this.state.active} current={this.state.current} updateData={this.updateData}/>
                </div>
                <BattleResutl data={this.state.battle} result={this.state.showResutl} updateData={this.updateData}/>
            </div>
        )
    }
}