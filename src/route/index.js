import React from "react";

const HYMain  = React.lazy(_=>import('../pages/main/index.tsx'))
const ProblemList = React.lazy(_ => import('../pages/main/index.tsx'))
const ProblemCategoryAddForm = React.lazy(_ => import('../pages/form-edit/index'))
export default [
    {
        path: '/',
        exact: true,
        component: HYMain,
    }, {
        path: '/problem/list',
        exact: true,
    }, {
        path: '/problem/create',
        exact: true,
        component: ProblemCategoryAddForm,
    },
]