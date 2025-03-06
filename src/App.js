import './App.css'
import ToastProvider from './component/ToastProvider/ToastContext'
import { DefaultLayout } from './Layout/DefaultLayout'
import React, { Fragment } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { publicRoutes } from './router'

function App () {
  return (
    <ToastProvider>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout
              const Page = route.component
              if (route.layout === null) {
                Layout = Fragment
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App
