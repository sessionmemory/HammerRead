import { PageMetaData } from '../components/patterns/PageMetaData'
import { About } from '../components/templates/About'

export default function LandingPage(): JSX.Element {
  return (
    <>
      <PageMetaData
        title="HammerRead"
        path="/about"
        ogImage="/static/images/og-homepage-03.png"
        description="HammerRead is the free, open source, read-it-later app for serious readers."
      />

      <About lang="en" />
    </>
  )
}
