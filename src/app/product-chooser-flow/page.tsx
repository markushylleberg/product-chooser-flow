import ProductChooserFlow from '@/components/ProductChooserFlow/ProductChooserFlow'
import { ProductChooserStepItem, SolutionItem } from '@/types'
import { ProductChooserMockData } from '@/utils'
import { Suspense } from 'react'

export default function Home() {
  // TODO:
  // Fetch page content here, for now it is
  // going to be hardcoded product flow data.
  const mockQuestionsData: ProductChooserStepItem[] = ProductChooserMockData.questions
  const mockSolutionsData: SolutionItem[] = ProductChooserMockData.solutions

  return (
    <main className="relative h-screen overflow-hidden">
      <div className="bg-clever-green-tint h-full w-full">
        <Suspense>
          <ProductChooserFlow questionsData={mockQuestionsData} solutionsData={mockSolutionsData} />
        </Suspense>
      </div>
    </main>
  )
}
