import React from 'react';

export default ({ data, active }) => {
  if (!data || !data[active]) { return (
    <div className="user-active">
      <p className="user-choose">Select User</p>
    </div>
  )
  }

  const user = data[active];
  return (
    <div className="user-active">
      <div className="user-active__border">
        <p className="user-active__username">{user.username}</p>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td className="userActive-table-column">First name:</td>
              <td className="userActive-table-column">{(user.first_name === "") ? "Empty" : user.first_name }</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Last name:</td>
              <td className="userActive-table-column">{(user.last_name === "") ? "Empty" : user.last_name }</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Active:</td>
              <td className="userActive-table-column">{user.is_active ? "true" : "false"}</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Last login:</td>
              <td className="userActive-table-column">{(user.last_login == null) ? "Never" : (new Date(Date.parse(user.last_login))).toLocaleString() }</td>
            </tr>
            <tr>
              <td className="userActive-table-column">Super user:</td>
              <td className="userActive-table-column">{user.is_superuser ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};