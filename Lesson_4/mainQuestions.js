'use strict';
let mainQuestions = {
    askQuestions(questions) {    // метод отображения вариантов вопросов и ответов
        let variations = "";
        let key;
        // noinspection ES6ShorthandObjectProperty
        for (key in questions.variants) { // перебираем в цикле for варианты ответа на вопрос
            variations += `${key} : ${questions.variants[key]}\n`;}

        let answer = prompt(`${questions.text}\n Варианты ответа: \n ${variations}`); //показываем варианта ответа
        return answer === questions.correctAnswer;  // сравниваем ответ пользователя с правильным
    }
};