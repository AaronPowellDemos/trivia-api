const questions = require("../questions");

module.exports = async function(context, req) {
  context.log("Request for all questions");

  context.res = {
    body: questions.map(q => {
      return {
        question: q.question,
        answers: q.incorrect_answers.concat([q.correct_answer]).sort()
      };
    })
  };
};
