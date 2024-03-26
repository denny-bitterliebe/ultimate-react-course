import { useQuiz } from "../../src/contexts/QuizContext";

function Options() {
  const { question, questionIndex, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question[questionIndex].options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question[index].correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } `}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={answer !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
