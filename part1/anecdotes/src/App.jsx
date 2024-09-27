import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>{text}</button>

const MostVoted = ({ votes, anecdotes }) => {
  const maxValue = Math.max(...votes)
  const indexOfMax = votes.indexOf(maxValue)

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMax]}</p>
      <p>has {maxValue} votes</p>
    </>
  )
}

const AnecdoteOfDay = ({anecdotes, selected, votes}) => {
  return (
  <>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>has {votes[selected]} votes</p>
  </>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const handleVotes = () => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
  }

  const getRandomExcludingSelected = () => {
    let num;
    do {
      num = Math.floor(Math.random() * anecdotes.length);
    } while (num === selected);
    return num;
  }

  return (
    <div>
      <AnecdoteOfDay anecdotes={anecdotes} selected={selected} votes={votes}></AnecdoteOfDay>
      <Button text="Vote" handleClick={handleVotes}></Button>
      <Button text="Next anecdote" handleClick={() => setSelected(getRandomExcludingSelected)}></Button>
      <MostVoted votes={votes} anecdotes={anecdotes}></MostVoted>
    </div>
  )
}

export default App
