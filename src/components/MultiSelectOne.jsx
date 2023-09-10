import Select from "react-select";

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

export default function MultiSelectOne() {
  return (
    <div className="container mx-auto mt-20">
      <Select
        defaultValue={[colourOptions[1], colourOptions[4]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="lg:w-1/2 w-full"
        classNamePrefix="select"
      />
    </div>
  );
}
