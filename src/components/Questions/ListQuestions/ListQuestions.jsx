import { questionsAnswers } from "../../../data/questionFAQ";
import ListItem from "../ListItem/ListItem";
import { List } from "./ListQuestions.styled";
import { useState } from "react";

const ListQuestions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState(
    questionsAnswers[0].id
  );

  const handleSelect = (id) => {
    setSelectedQuestions((prev) => (prev === id ? null : id));
  };
  return (
    <List>
      {questionsAnswers.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isSelected={item.id === selectedQuestions}
          onSelect={() => handleSelect(item.id)}
        ></ListItem>
      ))}
    </List>
  );
};

export default ListQuestions;
