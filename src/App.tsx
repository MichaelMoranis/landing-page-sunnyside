import Header from "@components/Header"
import transform from "@assets/images/mobile/image-transform.jpg"
import ComponentImage from "@components/ComponentImage"

function App() {

  return (
    <>
      <Header />
      <ComponentImage image={transform} />
    </>
  )
}

export default App
