import React from 'react';
import classnames from 'classnames';

export default ({ land, updateData, index, race, current, fraction}) => {
  let act = false;
  if(index == current) act = true;
  let sim = false;
  if(race == land.race.name) sim = true;
  let move = false;
  if(Math.abs(current - index) >= 1 && Math.abs(current - index) < 3 && land.race.fraction.name == fraction) move = true;
  let attack = false;
  if(Math.abs(current - index) >= 1 && Math.abs(current - index) < 3 && land.race.fraction.name != fraction) attack = true;
  return (
      <div className={classnames("land-block",{"land-block-sim": sim},{"land-block-current": act},{"land-block-move": move}, {"land-block-attack": attack})} onClick={() => updateData({active : index})}>
          <p className="land-block-description">{land.name}</p>
      </div>
  );
};