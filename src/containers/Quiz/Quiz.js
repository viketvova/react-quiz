import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 3,
        answers: [
          { text: 'Черного', id: 1 },
          { text: 'Красного', id: 2 },
          { text: 'Синего', id: 3 },
          { text: 'Оранжевого', id: 4 },
        ]
      },
      {
        id: 2,
        question: 'Какой сейчас год?',
        rightAnswerId: 3,
        answers: [
          { text: '2019', id: 1 },
          { text: '2020', id: 2 },
          { text: '2021', id: 3 },
          { text: 'Я не знаю', id: 4 },
        ]
      }
    ]
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }


  onAnswerClickHandler = (answerId) => {

    if (this.state.answerState) {
      let key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]) {
        results[answerId] = 'success'
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        results: results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      results[answerId] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results: results
      })
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Выберите ответы на вопросы</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
              />
              : <ActiveQuiz
                onAnswerClick={this.onAnswerClickHandler}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}


export default Quiz