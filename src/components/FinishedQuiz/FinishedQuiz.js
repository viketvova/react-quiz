import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../../components/UserInterface/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, elem) => {
        if (props.results[elem] === 'success') {
            total++
        }

        return total
    }, 0)


    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )

                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>Повторить</Button>
                <Button type='success'>Перейти к другим тестам</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz