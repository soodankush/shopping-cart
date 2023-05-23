import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import ShoppingCartRouter from "../../routes/ShoppingCartRouter";
const AppContent = () => {
  return(
    <Routes>
      {ShoppingCartRouter.map((route, index) => {
        return (
          route.element && (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          )
        )
      })}
      <Route path="/" element={<Navigate to="home" replace /> } />
    </Routes>
  )
}

export default AppContent