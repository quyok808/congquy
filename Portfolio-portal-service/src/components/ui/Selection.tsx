export interface Option {
  label: string;
  value: string;
}

interface SelectionProps {
  label: string;
  value: string;
  setter: (value: string) => void;
  options: Option[];
}

export default function Selection({
  label,
  value,
  setter,
  options,
}: SelectionProps) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <select
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">-- Chọn --</option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
}
