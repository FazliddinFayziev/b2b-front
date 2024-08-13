import * as React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Typography, TextField, Slider } from '@mui/material';
import { compare, compareButton, model, prompts, propmtBox, tokensBox, tokenText, 
topButtons, upload, VisuallyHiddenInput } from './Style';


const Main: React.FC = () => {
  const [progress, setProgress] = React.useState(50);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setProgress(newValue as number);
  };

  return (
    <>
      <Box sx={topButtons}>

        <Button
          sx={upload}
          color="primary"
          role={undefined}
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button variant="outlined" sx={model}>
          Model-V
        </Button>
      </Box>

      <Box sx={tokensBox}>
        <Typography variant="h6" sx={tokenText}>
          Max tokens: {progress}
        </Typography>
        <Slider
          min={0}
          max={100}
          value={progress}
          onChange={handleSliderChange}
          aria-labelledby="progress-slider"
        />
      </Box>

      <Box sx={propmtBox}>
        <TextField
          multiline
          rows={4}
          fullWidth
          sx={prompts}
          variant="outlined"
          placeholder="Enter system prompt..."
        />
      </Box>

      <Box sx={compare}>
        <Button
          variant="contained"
          sx={compareButton}
        >
          Compare!
        </Button>
      </Box>
    </>
  );
}

export default Main;