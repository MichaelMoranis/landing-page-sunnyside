type TitleProps = {
  text: string
  world?: string
}

export default function Title({text, world}: TitleProps) {
  return (
    <div className="flex items-center justify-center flex-col py-16 text-slate-200">
      <h2 className="text-4xl font-bold">{text}</h2>
      <h2 className="text-4xl font-bold">{world}</h2>
    </div>
  );
}
