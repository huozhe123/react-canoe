import React, { Suspense } from 'react'
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'
import HYMain from './pages/main'
import {renderRoutes} from 'react-router-config'
import routes from './route'

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading</div>}>
        <div>{renderRoutes(routes)}</div>
      </Suspense>
    </HashRouter>
  );
}

export default App;
