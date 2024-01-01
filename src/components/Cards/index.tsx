import ImageEmily from "@assets/images/image-emily.jpg"
import ImageJennie from "@assets/images/image-jennie.jpg"
import ImageThomas from "@assets/images/image-thomas.jpg"

export default function Cards() {
    return (
        <>
          <div className="flex flex-col items-center justify-center text-center mx-2 py-2 gap-4">
            <div className="pt-4 pb-4">
                <img className="rounded-full" src={ImageEmily} alt="foto do perfil card" />
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Voluptatibusporis animi minus dolor debitis delectus fugiat consectetur quisquam!</p>
            </div>
            <div>
                <h4 className="font-bold text-2xl text-slate-950">Emily R.</h4>
                <h4 className="text-slate-500">marketing, director</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 pb-4 text-center mx-2 gap-4">
            <div className="pt-4 pb-4">
                <img className="rounded-full" src={ImageJennie} alt="foto do perfil card" />
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Voluptatibusporis animi minus dolor debitis delectus fugiat consectetur quisquam!</p>
            </div>
            <div>
                <h4 className="font-bold text-2xl text-slate-950">Jennie F</h4>
                <h4 className="text-slate-500">Businnes Owner</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 pb-4 text-center mx-2 gap-4">
            <div className="pt-4 pb-4">
                <img className="rounded-full" src={ImageThomas} alt="foto do perfil card" />
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Voluptatibusporis animi minus dolor debitis delectus fugiat consectetur quisquam!</p>
            </div>
            <div>
                <h4 className="font-bold text-2xl text-slate-950">Thomas S</h4>
                <h4 className="text-slate-500">Chief Operating Officer</h4>
            </div>
          </div>
        </>
    )
}