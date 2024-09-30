import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Resume() {
  return (
    <div>
      <h1>Resume Page will be here</h1>
      <iframe
        src="https://www.wikipedia.org"
        width="600"
        height="400"
        style={{ border: 'none' }}
        title="Example Iframe"
      ></iframe>
    </div>
  )
}
