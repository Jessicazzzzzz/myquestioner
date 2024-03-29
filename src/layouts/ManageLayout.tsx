import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Styles from './ManageLayout.module.scss'
const ManageLayout: FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>manager left
      <button>创建问卷</button>
      <button>我的问卷</button>
      <a>星标问卷</a>
      <a>星标问卷</a>
      <a>回收站</a>
      </div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
