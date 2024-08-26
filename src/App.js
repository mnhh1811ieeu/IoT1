import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import { routes } from './routes'

import DefaultComonent from './components/DefaultComponent/DefaultComonent'
import { Fragment } from 'react'
function App() {
  return (
    <div >

      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComonent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <> <Layout>
                  <Page />
                </Layout>

                </>
              } />

            )
          })}
        </Routes>
      </Router>

    </div>
  )
}

export default App;
