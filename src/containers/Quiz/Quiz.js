import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
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

  palindrome(str) {
    /* remove special characters, spaces and make lowercase*/
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    let checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if str is a Palindrome*/
    return (removeChar === checkPalindrome);


  }

  onAnswerClickHandler = (answerId) => {

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: { [answerId]: 'success' }
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })

    }

  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Выберите ответы на вопросы</h1>
          <h2>{this.palindrome('А роза упала на лапу Азора')}</h2>
          <ActiveQuiz
            onAnswerClick={this.onAnswerClickHandler}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}


export default Quiz