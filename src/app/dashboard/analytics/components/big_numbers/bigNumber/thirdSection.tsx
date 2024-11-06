export default function BigNumberThirdSection({
  fifth_value,
  fifth_label,
  sixth_value,
  seventh_label,
  seventh_value,
}: {
  fifth_value: string;
  fifth_label: string;
  sixth_value: boolean;
  seventh_label: string;
  seventh_value: string;
}) {
  return (
    <div className="flex justify-between gap-4">
      {fifth_value !== undefined ? (
        <div className="flex flex-col items-end">
          <div className="flex gap-1">
            <p className="text-xs font-bold text-slate-400">{fifth_label}</p>
            <p className={`text-xs font-bold text-white`}>{fifth_value}</p>
          </div>
          <div className="flex gap-1">
            <p className="text-xs font-bold text-slate-400">{seventh_label}</p>
            <p className={`text-xs font-bold text-white`}>{seventh_value}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
