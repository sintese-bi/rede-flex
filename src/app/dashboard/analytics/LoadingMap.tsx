export default async function LoadingMap() {
  return (
    <div className="flex flex-col gap-2 w-full  rounded-lg h-96">
      <div className="flex items-center gap-2">
        <p className="flex items-center text-sm font-bold text-slate-300 h-8">
          Carregando seção de geocalização de postos...
        </p>
      </div>
      <div className="w-full h-full rounded-lg">
        <div className=" bg-slate-200 h-full w-full rounded-lg"></div>
      </div>
    </div>
  );
}
