import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    
                    return(
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}></i>
                        </li>
                    )
                }) }


                {/* <li>
                    <strong>1. </strong>
                    Some text
                    <i className={'fa fa-times ' + classes.error} />
                </li>
                <li>
                    <strong>1. </strong>
                    Some text
                    <i className={'fa fa-check ' + classes.success} />
                </li> */}
            </ul>

            <p>{successCount} from {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary' >Повторить</Button>
                <Button type='success' >Перейти к списку тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz