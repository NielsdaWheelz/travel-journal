import Header from "./components/Header"
import Entry from "./components/Entry"
import travelData from "./data.js"

function App() {

  const entries = travelData.map((entry) => {
    return (
      <Entry
        key = {entry.id}
        {...entry}
      />
    )
  })

  return (
    <>
    <Header />
    {entries}
    </>
  )
}

export default App
