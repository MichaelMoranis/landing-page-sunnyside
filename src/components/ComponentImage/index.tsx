
type ImageProps = {
    image: string, 
    text?: string,
}

export default function ComponentImage({ text, image }: ImageProps) {
    return (
        <div>
            <img className="bg-cover bg-no-repeat" src={image} alt="imagem-amarela-ovo" />
            <p>{text}</p>
        </div>
    )
}