import React, {memo, Ref} from 'react'
import ButtonsSection from './buttons-section';
import ProblemTable from './problem-table';

function IndexPage(): JSX.Element {
    const tableRef = React.useRef<any>();
    const refreshTable = () => {
        void tableRef.current?.refreshTable()
    }
    
    return (
        <>
          <h2>问题分组</h2>
          <ButtonsSection refreshTable={refreshTable}/>
          <ProblemTable ref={tableRef}/>
        </>
    )
};

IndexPage.displayName = 'IndexPage';


export default IndexPage;