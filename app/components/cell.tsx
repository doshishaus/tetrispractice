
import React from 'react'

type CellProps = {
    value: number;
};

const Cell: React.FC<CellProps> = ({value}) => {
    return(
        <div className={`w-10 h-10 border-2 ${value ? "bg-blue-500":"bg-gray-700"}`}>
            <p>{value}</p>
        </div>
    );
};

export default Cell;