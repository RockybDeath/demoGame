import * as React from "react";
import {browserHistory, Link} from "react-router";
import orks from "../img/orks.jpg";
import elfs from "../img/elfs.jpg";
import goblins from "../img/goblins.jpg";
import humans from "../img/humans.jpg";
import taurens from "../img/taurens.jpg";
import gnomes from "../img/gnomes.jpg";
import trolls from "../img/trolls.jpg";
import classnames from 'classnames';
import Race from "./Race";

export class Races extends React.Component {
    constructor(props) {
        super(props);
        this.showDescription = this.showDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
        this.state = {
            elfs: false,
            orks: false,
            goblins: false,
            humans: false,
            taurens: false,
            gnomes: false,
            trolls: false
        };
    }
    showDescription(name){
        this.setState({
            [name]:!this.state.name
        })
    }
    hideDescription(name){
        this.setState({
            [name]:this.state.name
        })
    }
    updateData(config){
        this.setState(config);
    }
    render() {
        return(
            <div className="race-items">
            {this.props.races.map((race, index) => {
                return (<Race stateStatus={this.state[race.name]} race={race} index={index} showMap={this.props.showMap} showDescription={this.showDescription} hideDescription={this.hideDescription}/>)
            })}
            {/* <div className={classnames("race-item",{"race-item-activeBlock": this.state.orks})}>
                <div onClick={() => this.props.showMap("orks")} className="race-img-block" onMouseEnter={() => this.showDescription("orks")} onMouseLeave={() => this.hideDescription("orks")}>
                    <img src={orks} className="race-item-img"></img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.orks})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.orks})}>Orks</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.orks})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div>
            <div className={classnames("race-item",{"race-item-activeBlock": this.state.elfs})}>
                <div onClick={() => this.props.showMap("elfs")} className="race-img-block" onMouseEnter={() => this.showDescription("elfs")} onMouseLeave={() => this.hideDescription("elfs")}>
                    <img src={elfs} className="race-item-img"></img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.elfs})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.elfs})}>Elfs</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.elfs})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div>
            <div className={classnames("race-item",{"race-item-activeBlock": this.state.goblins})}>
                <div onClick={() => this.props.showMap("goblins")} className="race-img-block" onMouseEnter={() => this.showDescription("goblins")} onMouseLeave={() => this.hideDescription("goblins")}>
                    <img src={goblins} className="race-item-img">
                    </img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.goblins})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.goblins})}>Goblins</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.goblins})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div>
            <div className={classnames("race-item",{"race-item-activeBlock": this.state.humans})}>
                <div onClick={() => this.props.showMap("humans")} className="race-img-block" onMouseEnter={() => this.showDescription("humans")} onMouseLeave={() => this.hideDescription("humans")}>
                    <img src={humans} className="race-item-img">
                    </img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.humans})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.humans})}>Humans</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.humans})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div>
            <div className={classnames("race-item",{"race-item-activeBlock": this.state.taurens})}>
                <div onClick={() => this.props.showMap("taurens")} className="race-img-block" onMouseEnter={() => this.showDescription("taurens")} onMouseLeave={() => this.hideDescription("taurens")}>
                    <img src={taurens} className="race-item-img">
                    </img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.taurens})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.taurens})}>Taurens</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.taurens})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div>
            <div className={classnames("race-item",{"race-item-activeBlock": this.state.gnomes})}>
                <div onClick={() => this.props.showMap("gnomes")} className="race-img-block" onMouseEnter={() => this.showDescription("gnomes")} onMouseLeave={() => this.hideDescription("gnomes")}>
                    <img src={gnomes} className="race-item-img">
                    </img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": this.state.gnomes})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !this.state.gnomes})}>Gnomes</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": this.state.gnomes})}>This is race for race This is race for race This is race for race
                This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                This is race for race This is race for race This is race for race This is race for race
                </p>
            </div> */}
        </div>
        )
    }
}