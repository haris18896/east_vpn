import React from 'react'

const InfoStore = React.createContext()

export const useInfoStore = () => React.useContext(InfoStore)

export const InfoStoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState)

  return <InfoStore.Provider value={[globalState, dispatch]}>{children}</InfoStore.Provider>
}
