import ProductChooserFlow from '@/components/ProductChooserFlow/ProductChooserFlow'
import { ProductChooserStepItem } from '@/types'
import { ProductChooseMockData } from '@/utils'

export default function Home() {
  // TODO:
  // Fetch page content here, for now it is
  // going to be hardcoded product flow data.
  const mockFlowData: ProductChooserStepItem[] = ProductChooseMockData

  return (
    <main className="relative h-screen overflow-hidden">
      <div className="bg-clever-green-tint h-full w-full">
        <ProductChooserFlow data={mockFlowData} />
      </div>
    </main>
  )
}
