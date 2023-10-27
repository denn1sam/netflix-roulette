import "./select-input.css";
import { useState } from "react";
import { SelectInputProps, SelectOption } from "./select-input.interface";

export function SelectInput({
  placeholder,
  options,
  selectedOptions = [],
  onSelectionChange,
}: SelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fieldSelectedOptions, setFieldSelectedOptions] =
    useState(selectedOptions);

  function toggleOption(option: SelectOption) {
    const isSelected = fieldSelectedOptions.some(
      (selected) => selected.value === option.value
    );

    let selectedOptionsList: SelectOption[] = [];

    if (isSelected) {
      selectedOptionsList = fieldSelectedOptions.filter(
        (selected) => selected.value !== option.value
      );
    } else {
      selectedOptionsList = [...fieldSelectedOptions, option];
    }

    setFieldSelectedOptions(selectedOptionsList);
    onSelectionChange(selectedOptionsList);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-input">
      <input
        type="text"
        id="title"
        className="select-input-field"
        placeholder={placeholder}
        value={fieldSelectedOptions.map((option) => option.label).join(", ")}
        onChange={() => null}
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="select-input-options-list">
          {options.map((option) => (
            <label key={option.value} className="select-input-option">
              <input
                type="checkbox"
                className="select-option-checkbox"
                checked={fieldSelectedOptions.some(
                  (selected) => selected.value === option.value
                )}
                onChange={() => toggleOption(option)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
