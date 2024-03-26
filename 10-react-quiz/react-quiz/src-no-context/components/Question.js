import { useQuiz } from "../../src/contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { question, dispatch, answer, index } = useQuiz();
  return (
    <div>
      <h4>{question[index].question}</h4>
      <Options></Options>
    </div>
  );
}

export default Question;
