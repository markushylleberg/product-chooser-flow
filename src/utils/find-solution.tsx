import { QuestionnarieAnswer, SolutionItem, SolutionItemWithMatch } from '@/types/index'

export function findBestMatchingSolution({
  userInput,
  solutions,
}: {
  userInput: QuestionnarieAnswer[]
  solutions: SolutionItem[]
}) {
  // Using the array of solutions (including their matching values),
  // we will rank the solutions on the most to least matching solution,
  // based on the user input.

  const matchedSolutions: SolutionItemWithMatch[] = solutions.reduce((allSolutions, solution) => {
    if (solution) {
      let matches = 0
      userInput.forEach(input => {
        const matchingQuestion = solution.questionnarieMatch.find(
          question => question.id === input.id
        )?.match
        if (matchingQuestion?.includes(input.answer)) {
          matches++
        }
      })
      allSolutions.push({ ...solution, matches })
    }

    return allSolutions
  }, [] as SolutionItemWithMatch[])

  // Solutions sorted descending by amount of matches.
  const sortedMatchedSolutions = matchedSolutions.sort((a, b) => b.matches - a.matches)

  // First solution of the sorted matching solution will be the best matching solution.
  const bestMatchingSolution: SolutionItem = sortedMatchedSolutions[0]

  return bestMatchingSolution
}
