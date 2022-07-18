import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-multi-carousel/lib/styles.css'

import { store } from './redux/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { InfoStoreProvider } from './context/context'
import { FlowReducer, initialFLowState } from './context/FlowReducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <InfoStoreProvider initialValue={initialFLowState} reducer={FlowReducer}>
        <App />
      </InfoStoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
