import React from 'react';

export default ({ term, data, update }) => {
    const dataSearch = e => {
        let value = e.target.value;

        let filterData = data.filter(user => {
            return user.username.startsWith(value);
        });
        update({
            data: filterData,
            active: 0,
            term: value,
            errorMessage: (filterData.length === 0) ? "Can't search user by "+value : ""
        });
    };
    return (
        <div className="users-search">
            <input
            value={term}
            type="text"
            className="form-control"
            placeholder="Search people by username..."
            onChange={dataSearch}
            />
        </div>
    );
};