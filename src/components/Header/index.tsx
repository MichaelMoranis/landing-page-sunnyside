import IconBurger from "@assets/images/icon-hamburger.svg"
import Title from "@components/Title"

export default function Header() {
    return (
        <div className="h-96 bg-blue-400 font-bold bg-no-repeat bg-center bg-cover bg-[url('@assets/images/image-header.jpg')]">
            <div className="flex items-center justify-between px-4 py-4">
            <p className="text-slate-200 text-2xl">sunnyside</p>
            <img src={IconBurger} alt="icon-hamburger" />
            </div>
            <Title text="we are" world="creatives"/>
        </div>
    )
}