import React from 'react';
import classnames from 'classnames';
import orks from "../img/orks.jpg";
import elfs from "../img/elfs.jpg";
import goblins from "../img/goblins.jpg";
import humans from "../img/humans.jpg";
import taurens from "../img/taurens.jpg";
import gnomes from "../img/gnomes.jpg";
import trolls from "../img/trolls.jpg";

export default ({race, showMap, showDescription, hideDescription, stateStatus}) => {
    let imageOfRace = null;
    if(race.name === "orks") imageOfRace = orks
    else if(race.name === "elfs") imageOfRace = elfs
    else if(race.name === "goblins") imageOfRace = goblins
    else if(race.name === "humans") imageOfRace = humans
    else if(race.name === "taurens") imageOfRace = taurens
    else if(race.name === "gnomes") imageOfRace = gnomes
  return (
    <div className={classnames("race-item",{"race-item-activeBlock": stateStatus})}>
                <div onClick={() => showMap(race.name)} className="race-img-block" onMouseEnter={() => showDescription(race.name)} onMouseLeave={() => hideDescription(race.name)}>
                    <img src={imageOfRace} className="race-item-img"></img>
                </div>
                <div className="race-item-hover-block">
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": stateStatus})}>Hover on icon</p>
                    <p className={classnames("race-item-hover",{"race-item-hover-activeBlock": !stateStatus})}>{race.name}</p>
                </div>
                <p className={classnames("race-desc",{"race-desc-activeBlock": stateStatus})}>{race.race_description}</p>
    </div>
  );
}