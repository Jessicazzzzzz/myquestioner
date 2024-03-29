import React, { FC, useState } from 'react'
import Styles from './List.module.scss'
import QuestionCard from '../../components/QuestionCard'

const rawList = [
  {
    _id: 'q1',
    title: '问题1',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createAt: '2022-01-01 00:00:00',
  },
  {
    _id: 'q2',
    title: '问题2',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createAt: '2022-07-01 00:00:00',
  },
  {
    _id: 'q3',
    title: '问题3',
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createAt: '2022-06-01 00:00:00',
  },
  {
    _id: 'q4',
    title: '问题4',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createAt: '2022-04-01 00:00:00',
  },
  {
    _id: 'q5',
    title: '问题5',
    isPublished: true,
    isStar: true,
    answerCount: 2,
    createAt: '2022-03-01 00:00:00',
  },
]
const List: FC = () => {
  const [list, setList] = useState(rawList)
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={Styles.right}>操作</div>
      </div>
      <div className={Styles.content}>
        {list.map((item) => (
          <QuestionCard key={item._id} {...item} />
        ))}
      </div>
      <div className={Styles.footer}>footer</div>
    </>
  )
}

export default List
