import Counter from './components/Counter'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="relative m-auto flex h-[100vh] flex-col items-center justify-center">
      <ThemeToggle />
      <Counter />

      <Footer />
    </div>
  )
}
