import React, {forwardRef} from 'react'

interface TableRef {
    refreshTable: () => void;
}

const ProblemTable = forwardRef<TableRef>((props, ref) => {
    const tableRef = React.useRef<any>();
    React.useImperativeHandle(
        ref,
        () => ({
            refreshTable: ()=>{console.log(88)},
        }),
        [tableRef.current],
    )
    return (
        <div ref={tableRef}>
            Table
        </div>
    )
})
export default ProblemTable;