import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: '90%' }} size="small">
      <Select
        id="demo-select-small"
        value={status}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value='aktif'>Aktif</MenuItem>
        <MenuItem value='tidakAktif'>Tidak Aktif</MenuItem>
      </Select>
    </FormControl>
  );
}
