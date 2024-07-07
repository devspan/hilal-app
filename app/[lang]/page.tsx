import HilalApp from '../components/HilalApp'

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main>
      <HilalApp lang={lang} />
    </main>
  )
}