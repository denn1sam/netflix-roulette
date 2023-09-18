import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { SelectFieldProps } from "../components/select-field/select-field.model";
import { SelectField } from "../components/select-field/SelectField";
import "../components/select-field/select-field.css";

export default {
  title: "Components/SelectField",
  component: SelectField,
} as Meta;

const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default = (args: SelectFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(selectOptions[0]);

  return (
    <SelectField
      {...args}
      selectOptions={selectOptions}
      selectedValue={selectedValue}
      onSelectedValueChanges={(value: any) => setSelectedValue(value)}
    />
  );
};

export const InteractionTest = () => {
  return (
    <div style={{ maxWidth: "300px" }}>
      <SelectField
        label="Select an option"
        selectOptions={selectOptions}
        selectedValue={selectOptions[0]}
        onSelectedValueChanges={(value: any) => console.log("Selected:", value)}
      />
    </div>
  );
};

InteractionTest.parameters = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const selectField = await canvas.findByText("Select an option");
    await userEvent.click(selectField);
    const optionToSelect = await canvas.findByText("Option 2");
    await userEvent.click(optionToSelect);
  },
};
