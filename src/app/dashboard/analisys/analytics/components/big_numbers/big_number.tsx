interface AnalisysBigNumbers {
  bigNumber: { label: string; value: string; icon: any };
}
export default async function AnalisysComponentsBigNumber({
  bigNumber,
}: AnalisysBigNumbers) {
  return (
    <div className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color  justify-center">
      <div className="flex flex-col gap-1">
        <p className="lg:text-lg md:text-lg text-sm font-extrabold text-slate-400">
          {bigNumber["label"]}
        </p>
        <div className="flex items-center gap-1">
          {bigNumber["icon"]}
          <p className="lg:text-md md:text-md text-sm font-bold text-slate-200">
            {bigNumber["value"]}
          </p>
        </div>
      </div>
    </div>
  );
}
