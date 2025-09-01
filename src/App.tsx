import Header from "./components/Header"
import Content from "./components/Content"
import travelData from "./data.js"

function App() {

  const travels = travelData.map((travel) => {
    return (
      <Content
        key = {travel.id}
        title = { travel.title }
        img = {travel.img}
        location = {travel.country}
        mapLink = {travel.googleMapsLink}
        date = {travel.dates}
        description = {travel.text}
      />
    )
  })

  return (
    <>
    <Header />
    {travels}
    </>
  )
}

export default App
