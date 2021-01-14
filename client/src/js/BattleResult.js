import React from 'react';
import classnames from 'classnames';

export default ({data, result, updateData}) => {
  return (
    <div className={classnames("user-active",{"result-hidden": result}, "result-block")}> 
      <div className="user-active__border">
        <p className="user-active__username">Battle result</p>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">Date:</td>
              <td className="userActive-table-column">{data.date}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Prisoners:</td>
              <td className="userActive-table-column">{data.prisoners}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Casualties:</td>
              <td className="userActive-table-column">{data.casualties}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Success:</td>
              <td className="userActive-table-column">{data.success ? "Win" : "Lose"}</td>
            </tr>
          </tbody>
        </table>
        <div className="table-column-button">
            <button onClick={() => updateData({ showResutl: true})} className = {classnames("shine-button")}>Close</button>
        </div>
      </div>
    </div>
  );
}