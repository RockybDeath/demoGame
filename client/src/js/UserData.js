import React from 'react';

export default ({ user, updateData, index }) => {
  return (
    <tr className="users-table-line" onClick={() => updateData({active : index})}>
      <td className="users-table-column">{user.id}</td>
      <td className="users-table-column">{user.username}</td>
      <td className="users-table-column">{(user.first_name === "") ? "Empty" : user.first_name }</td>
    </tr>
  );
};