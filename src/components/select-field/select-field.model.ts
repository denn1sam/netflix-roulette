export interface SelectFieldProps {
  label?: string;
  selectedValue: SelectedValue;
  selectOptions: SelectedValue[];
  onSelectedValueChanges: (value: SelectedValue) => void;
}

export interface SelectedValue {
  label: string;
  value: string;
}
