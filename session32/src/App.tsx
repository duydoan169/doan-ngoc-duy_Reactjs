import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import Bai1 from './pages/PTIT_CNTT4_IT104_Session32_Bai01/Bai1'
// import Bai2 from './pages/PTIT_CNTT4_IT104_Session32_Bai02/Bai2'
// import Bai3 from './pages/PTIT_CNTT4_IT104_Session32_Bai03/Bai3'
// import Bai4 from './pages/PTIT_CNTT4_IT104_Session32_Bai04/Bai4'
// import Bai5 from './pages/PTIT_CNTT4_IT104_Session32_Bai05/Bai5'
// import Bai6 from './pages/PTIT_CNTT4_IT104_Session32_Bai06/Bai6'
import Bai78 from './pages/PTIT_CNTT4_IT104_Session32_Bai07+8/Bai7+8'
export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Bai1></Bai1> */}
        {/* <Bai2></Bai2> */}
        {/* <Bai3></Bai3> */}
        {/* <Bai4></Bai4> */}
        {/* <Bai5></Bai5> */}
        {/* <Bai6></Bai6> */}
        <Bai78></Bai78>
      </Provider>
    </div>
  )
}
