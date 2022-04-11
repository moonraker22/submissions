import Button from "./components/button/Button";

import { useState } from "react";
//Math.floor(Math.random() * n)
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);
  const mostVotes = votes.reduce((a, b) => (a > b ? a : b));
  const mostVotedAnecdote = votes.indexOf(mostVotes);
  //{console.log(mostVotedAnecdote)}
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <br />
      <div>Has {votes[selected]} votes</div>
      <Button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next anecdote
      </Button>
      <br />
      <Button
        onClick={() =>
          setVotes(
            votes.map((vote, index) => (index === selected ? vote + 1 : vote))
          )
        }
      >
        Vote
      </Button>
      <br />
      <h4>
        <strong>Anecdote with most votes:</strong>
      </h4>
      <div>{anecdotes[mostVotedAnecdote]}</div>
    </>
  );
};

export default App;
