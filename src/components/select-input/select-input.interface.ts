export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectInputProps extends React.PropsWithChildren {
  options: SelectOption[];
  selectedOptions?: SelectOption[];
  placeholder?: string;
  onSelectionChange: (options: SelectOption[]) => void;
}
