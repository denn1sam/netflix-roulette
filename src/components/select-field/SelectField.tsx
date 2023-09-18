import { useState } from "react";
import "./select-field.css";
import { SelectFieldProps } from "./select-field.model";

export function SelectField({
  label,
  selectOptions,
  selectedValue,
  onSelectedValueChanges,
}: SelectFieldProps) {
  const [isListOpen, setIsListOpen] = useState(false);

  function handleListView(): void {
    setIsListOpen((isListOpen) => !isListOpen);
  }

  const selectOptionsList = selectOptions.map((selectOption) => {
    return (
      <div
        key={selectOption.value}
        className="select-option"
        onClick={() => onSelectedValueChanges(selectOption)}
      >
        {selectOption.label}
      </div>
    );
  });

  return (
    <div className="select-field">
      {label && <div className="select-field-label">{label}</div>}

      <div className="select-field-selection" onClick={handleListView}>
        <div className="select-field-selected-value">{selectedValue.label}</div>
        <div className="select-field-arrow-down">{">"}</div>

        {isListOpen && (
          <div className="select-field-selection-list">{selectOptionsList}</div>
        )}
      </div>
    </div>
  );
}
