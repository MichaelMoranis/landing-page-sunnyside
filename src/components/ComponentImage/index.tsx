type ImageProps = {
    image: string
}

export default function ComponentImage({ image }: ImageProps) {
    return (
        <div>
            <img src={image} alt="imagem-amarela-ovo" />
        </div>
    )
}