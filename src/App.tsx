import Header from "@components/Header"
import transform from "@assets/images/mobile/image-transform.jpg"
import standout from "@assets/images/mobile/image-stand-out.jpg"
import graphicdesign from "@assets/images/mobile/image-graphic-design.jpg"
import photografy from "@assets/images/mobile/image-photography.jpg"
import ComponentImage from "@components/ComponentImage"
import ComponentText from "@components/ComponentText"
import Subtitle from "@components/Subtitle"
import Cards from "@components/Cards"
import ImagesBanner from "@components/ImagesBanner"

function App() {

  return (
    <>
      <Header />
      <ComponentImage image={transform} />
      <ComponentText />
      <ComponentImage image={standout} />
      <ComponentText />
      <ComponentImage image={graphicdesign}/>
      <ComponentText />
      <ComponentImage image={photografy}/>
      <Subtitle />
      <Cards />
      <ImagesBanner />
    </>
  )
}

export default App
