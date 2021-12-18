import React from 'react';
import classnames from 'classnames';
const data = {wood: 156, stones: 120};

export class ActiveLand extends React.Component{
  constructor(props) {
    super(props);
    this.changeData = this.changeData.bind(this);
    this.state = {
      count: "",
      data: data,
      allPower: 0
    };
  } 
  changeData(event){
    this.setState({
      count: event.target.value
    })
  }
  componentDidMount(){
    const race = {race:this.props.race}
    fetch("/hero/allPower",{
      method:"POST",
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(race)
  })
  .then(res => res.ok ? res : Promise.reject(res))
  .then((res) => res.json())
  .then( (res) => { 
      this.setState({
          allPower: res
      })})
  .catch((error) => {
      let message = ""
      if(error.status === 400 ) message = "Wrong password or username"
      else message = "Error"
  });
  }
  // const land = data[active];
  // const current_land = data[current];
  // let dis = true;
  // let count = 0;
  // if(Math.abs(current - active) >= 1 && Math.abs(current - active) < 3 && land.race_name != current_land.race_name) dis = false;
  // let move = false;
  // if(Math.abs(current - active) >= 1 && Math.abs(current - active) < 3 && land.race_name == current_land.race_name) move = true;
  render(){
  return (
    <div className="user-active">
      <div className="leader_info_block" id="leader_info">
      <div className="user-active__border">
        <div className="user-active__top__block">
          <span className="user-active__username">
            Leader - {this.props.leader.name}
          </span>
          <div className="button-arrow" onClick={() => {document.getElementById("leader_info").style.display = "none"}}></div>
        </div>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">Experience:</td>
              <td className="userActive-table-column">{(this.props.leader.experience)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Race:</td>
              <td className="userActive-table-column">{(this.props.race)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Power:</td>
              <td className="userActive-table-column">{this.props.leader.char_id.intellect*2+this.props.leader.char_id.strength*1.5+this.props.leader.char_id.agillity*1.25}</td>
            </tr>
          </tbody>
        </table>
        <p className="user-active__username">Army</p>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">Size:</td>
              <td className="userActive-table-column">{(this.props.army.size)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Power:</td>
              <td className="userActive-table-column">{(this.props.army.power)}</td>
            </tr>
          </tbody>
        </table>
        <p className="user-active__username">Resources of race</p>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">Wood:</td>
              <td className="userActive-table-column">{(this.props.resources.wood)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Stones:</td>
              <td className="userActive-table-column">{(this.props.resources.stones)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Gold:</td>
              <td className="userActive-table-column">{(this.props.resources.gold)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Steel:</td>
              <td className="userActive-table-column">{(this.props.resources.steel)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Food:</td>
              <td className="userActive-table-column">{(this.props.resources.food)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">AllPower:</td>
              <td className="userActive-table-column">{this.state.allPower}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div className="border-info">
      <div className="user-active__border">
        <p className="user-active__username">{this.props.data[this.props.active].name}{this.props.active==this.props.current ? " - current" : null}</p>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">Race:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].race.name)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Wood:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.wood)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Stones:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.stones)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Gold:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.gold)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Steel:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.steel)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Food:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.food)}</td>
            </tr>
          </tbody>
        </table>
        <div className="table-column-button">
                <button className = {classnames("shine-button",{"disabled": Math.abs(this.props.current - this.props.active) >= 1 && Math.abs(this.props.current - this.props.active) < 3 && this.props.data[this.props.active].race.fraction.name != this.props.data[this.props.current].race.fraction.name ? false : true})} onClick={() => this.props.battle()}>Attack</button>
                <button className = {classnames("shine-button",{"disabled": Math.abs(this.props.current - this.props.active) >= 1 && Math.abs(this.props.current - this.props.active) < 3 && this.props.data[this.props.active].race.fraction.name == this.props.data[this.props.current].race.fraction.name ? false : true})} onClick={() => {this.props.updateData({current: this.props.active}); this.props.mining();}}>Move</button>
        </div>
        <div className="table-column-button">
                <button className = {classnames("shine-button")} onClick={() => this.props.mining()}>Skip turn</button>
        </div>
        <div className="block-information" onClick={() => this.props.updateData({svg: !this.props.svg})}>
            <p>More information <svg className={classnames("bi bi-chevron-up svg-icon",{'svg-down': this.props.svg}, {'svg-up': !this.props.svg})} width="18" height="18" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg></p>
        </div>
      </div>
      <div className = {classnames("user-active_border",{"user-active__border_active": !this.props.svg})}>
        <table className="table table-dark">
          <tbody>
          <tr>
              <td className="userActive-table-column">Wood_mining:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.wood_mining)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Stones_mining:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.stones_mining)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Gold_mining:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.gold_mining)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Steel_mining:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.steel_mining)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Food_mining:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.food_mining)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Garrison replenishment:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].resources.garrison_replenishment)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Size:</td>
              <td className="userActive-table-column">{(this.props.data[this.props.active].army.size)}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Power:</td>
              <td className="userActive-table-column">{this.props.data[this.props.active].army.power}</td>
            </tr>
          </tbody>
        </table>
        <div className={classnames("table-column-button",{"hide": (this.props.current != this.props.active)})}>
                <button className = {classnames("shine-button")} onClick={() => this.props.takeGarrison(this.state.count)}>Take garrison</button>
                <input type="number" value={this.state.count} onChange={(e) => this.changeData(e)}></input>
                <p className="garrison-error">{this.state.count > this.props.data[this.props.current].power ? "So much" : ""}</p>
        </div>
        </div>
        </div>
    </div>
  );
  }
};