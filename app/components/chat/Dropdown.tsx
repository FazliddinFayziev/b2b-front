import * as React from 'react';
import { formContol } from './Style';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Value {
  id: string | number;
  title: string;
}

interface DropdownProp {
  initial: string;
  values: Value[];
  selectedValue: string;
  setSelectedValue: any;
}

const Dropdown: React.FC<DropdownProp> = ({ initial, values, selectedValue, setSelectedValue }) => {

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={formContol} size="small">
      <InputLabel id="demo-select-small-label">{initial}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label={initial}
        value={selectedValue}
        onChange={handleChange}
      >
        {values.map((value) => (
          <MenuItem key={value.id} value={value.title}>
            {value.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;