import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc",
                direction: selectedSort.direction === "up" ? "down" : "up"
            });
        } else {
            onSort({ path: item, order: "asc", direction: "up" });
        }
    };

    const renderSortArrow = (direction, currentPath) => {
        if (selectedSort.path === currentPath) {
            return <i className={`bi bi-caret-${direction}-fill`}></i>;
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {selectedSort.direction &&
                            renderSortArrow(
                                selectedSort.direction,
                                columns[column].path
                            )}
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Провфессия
                </th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th /> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
