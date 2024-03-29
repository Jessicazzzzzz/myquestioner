import React, { FC } from 'react'
import Styles from './QuestionCard.module.scss'
type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isPublished, isStar, answerCount, createAt } = props
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.title}>
          <div className={Styles.left}>
            <a href="#"> {title}</a>
          </div>
          <div className={Styles.right}>
            {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
            <span>答卷 : {answerCount}</span>
            <span> {createAt}</span>
          </div>
        </div>
        <div className={Styles['button-container']}>
          <div className={Styles.left}>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div className={Styles.right}>
            <button>表星</button>
            <button>复制</button>
            <button>删除</button>
          </div>
          </div>
      </div>
    </>
  )
}
export default QuestionCard
