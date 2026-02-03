const FilterSection = ({ title, options, toggleCategory }) => {
  return (
    <div className="border p-4">
      <h4 className="font-medium mb-3">{title}</h4>

      <div className="space-y-2 text-sm">
        {options.map(({ label, checked }) => (
          <label key={label} className="flex items-center gap-2">
            <input type="checkbox" value={label} onChange={toggleCategory} defaultChecked={checked} />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
