import * as React from "react";
import {Link} from "react-router";
import classnames from 'classnames';
import logotip from "../img/logotip.svg";
import {Users} from "./tableUsers";
import sample from "../videos/bfa.mp4";
export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.showBlock=this.showBlock.bind(this);
        this.showElement = this.showElement.bind(this)
        this.default = this.default.bind(this)
        this.state = {
            mainButton: false,
            menu: true
        };
    }
    default(){
        this.setState({
            mainButton: true,
            menu: true
       }) 
    }
    showBlock(name){
        this.default();
        this.setState({
            [name]: !this.state.[name]
        })
    }
    showElement(){
        if(this.state.users) return <Users/>
        else if(this.state.shop) return <h3>Here will be shop</h3>
        else if(this.state.support) return <h3>I don't have any support</h3>
        else if(this.state.tea) return <h3>I want a tea too</h3>
        else if(this.state.news) return <h3>Here will be news</h3>
        else return null
    }
    render(){
        return(
            <div>
                <div className="main-button" hidden={this.state.mainButton}>
                <div className="button" onClick={() => this.showBlock("menu")}>
                    <span>
                        Begin adventure
                    </span>
                </div>
                </div>
                <div hidden={this.state.menu}>
                <header className="header-container">
                    <p className="text-center-header">World of warcraft. Conquers.</p>
                </header>
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="menu">
                    <div className="menu-item">
                    <Link className="glitch-btn" to="/game">
                        <div className="text">SINGLE GAME<span className="hidden"></span></div>
                        <div className="mask mask1">
                            <span>SINGLE GAME</span>
                        </div>
                        <div className="mask mask2">
                            <span>SINGLE GAME</span>
                        </div>
                        <div className="mask mask3">
                            <span>SINGLE GAME</span>
                        </div>
                    </Link>
                    </div>
                    <div className="menu-item">
                    <Link className="glitch-btn" to="/gameMulti">
                        <div className="text">PLAY WITH OTHERS<span className="hidden"></span></div>
                        <div className="mask mask1">
                            <span>PLAY WITH OTHERS</span>
                        </div>
                        <div className="mask mask2">
                            <span>PLAY WITH OTHERS</span>
                        </div>
                        <div className="mask mask3">
                            <span>PLAY WITH OTHERS</span>
                        </div>
                    </Link>
                    </div>
                    <div className="menu-item">
                    <Link className="glitch-btn" to="/info">
                        <div className="text">COURSE 4<span className="hidden"></span></div>
                        <div className="mask mask1">
                            <span>COURSE 4</span>
                        </div>
                        <div className="mask mask2">
                            <span>COURSE 4</span>
                        </div>
                        <div className="mask mask3">
                            <span>COURSE 4</span>
                        </div>
                    </Link>
                    </div>
                </div>
                <header className="down-container">
                    <p className="text-center-header">Blizzard Entertainment</p>
                </header>
                </div>
            </div>
        )
    }
}