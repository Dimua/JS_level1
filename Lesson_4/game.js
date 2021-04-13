'use strict';

let game = {               //создаем обьект игры
    score: 0,               // свойство игры : количество правильных ответов
    nextQuestionIndex: 0,   // свойство игры : следующий вопрос,его индекс
message:alert('Хотите сыграть в игру "Кто хочет стать миллионером"'),
    start() {                //функция(метод обьекта) запуска игры

        if (!this.isQuestionsExists()) {   // Проверка,если больше нет вопросов тогда...
            alert(`Игра окончена, ваш счет ${this.score}`);
            this.nextQuestionIndex = 0;
            this.score = 0;
            return;
        }

        let result = mainQuestions.askQuestions(questions[this.nextQuestionIndex]); //ответы пользователя на вопросы
        if (result) {           // если ответ правильный
            this.score++;       //увеличиваем счет на единицу
        }
        this.nextQuestionIndex++;  // переходим к следующему вопросу
        this.start();
    },
    isQuestionsExists() {    // метод который проверяет наличие вопросов в массиве questions, попробует получить элемент по индексу
        return questions[this.nextQuestionIndex] !== undefined;
    }
};
game.start();

