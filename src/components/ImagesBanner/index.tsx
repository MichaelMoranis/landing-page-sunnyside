import milkbottles from "@assets/images/mobile/image-gallery-milkbottles.jpg";
import cone from "@assets/images/mobile/image-gallery-cone.jpg";
import orange from "@assets/images/mobile/image-gallery-orange.jpg";
import sugar from "@assets/images/mobile/image-gallery-sugar-cubes.jpg";

// interface arrImagesProps {
//   src: string;
//   alt: string;
// }

// const arrImages: arrImagesProps[] = [
//   {
//     src: milkbottles,
//     alt: "milkbottles",
//   },
//   {
//     src: cone,
//     alt: "cone",
//   },
//   {
//     src: orange,
//     alt: "orange",
//   },
//   {
//     src: sugar,
//     alt: "sugar",
//   },
// ];

export default function ImagesBanner() {
  return (
    <div className="flex items-center justify-center flex-wrap mb-2 mt-2">
      {/* {arrImages.map((image, index) => (
        <img className="h-72 w-72" key={index} src={image.src} alt={image.alt} />
      ))} */}
      <div className="flex justify-center items-center">
        <img className="h-48 w-44" src={milkbottles} alt="" />
        <img className="h-48 w-44"  src={cone} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="h-48 w-44"  src={sugar} alt="" />
        <img className="h-48 w-44"  src={orange} alt="" />
      </div>
    </div>
  );
}
