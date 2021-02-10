import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, elem) => {
        if (props.results[elem] === 'success') {
            total++
        }
        return total
    }, 0)
    const value = Object.values(props.results)
    console.log(value)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((elem, index) => {
                        // const cls = [
                        //     'fa',
                        //     props.results[elem.id] === 'error' ? 'fa-times' : 'fa-check',
                        //     classes[props.results[elem.id]]
                        // ]
                        // if (props.results[elem.id] === 'success') {
                        //     iClass = ('fa fa-times ' + classes.error)
                        // } else {
                        //     iClass = ('fa fa-check ' + classes.success)
                        // }
                        return (
                            <li key={index}>
                                <strong>{elem.id}. </strong>
                                {elem.question}

                                <i className={value[elem.id] === 'success' ? ('fa fa-times ' + classes.error) : ('fa fa-check ' + classes.success)}></i>
                            </li>

                        )
                    })}

            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz