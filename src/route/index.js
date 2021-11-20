import React from "react";

const HYMain  = React.lazy(_=>import('../pages/main/index.tsx'))

export default [
    {
        path: '/',
        exact: true,
        component: HYMain,
    }
]