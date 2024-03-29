import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout: FC = () => {
  return (
    <>
      <div>mainlayout header</div>
      <div>
        <Outlet/>
      </div>
      <div>mainlayout foot</div>
    </>
  )
}
export default MainLayout
