import React, {memo} from 'react';
import {Button} from 'antd';

function ButtonsSection(props: {[id: string]: any}): JSX.Element {
    const handleAddProblemCategory = (): void => {
        props.refreshTable()
    }
    console.log('button-sction')

    return (
        <>
          <Button type="primary" onClick={handleAddProblemCategory}>
            添加问题分组
          </Button>
        </>
    )
}

export default ButtonsSection;