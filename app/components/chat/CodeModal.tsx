import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Tabs, Tab, Button, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CodeProp {
    open: boolean;
    handleClose: () => void;
}

const CodeModal: React.FC<CodeProp> = ({ open, handleClose }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const codeExamples: Record<string, string> = {
    Python: `import requests\nresponse = requests.get('https://api.example.com/data')\nprint(response.json())`,
    NodeJs: `const fetch = require('node-fetch');\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data));`,
    Java: `HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n  .uri(URI.create("https://api.example.com/data"))\n  .build();\nclient.sendAsync(request, BodyHandlers.ofString())\n  .thenApply(HttpResponse::body)\n  .thenAccept(System.out::println);\n`
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const copyToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      document.execCommand('copy', true, text);
    }
  };

  const currentLanguage = Object.keys(codeExamples)[tabIndex] as keyof typeof codeExamples;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ fontFamily: 'Dosis' }}>
        API Usage Examples
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="code examples tabs">
          <Tab sx={{ fontFamily: 'Dosis' }} label="Python" />
          <Tab sx={{ fontFamily: 'Dosis' }} label="NodeJs" />
          <Tab sx={{ fontFamily: 'Dosis' }} label="Java" />
        </Tabs>
        <Box sx={{ padding: 2, backgroundColor: '#282c34', borderRadius: 1, overflow: 'auto' }}>
          <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
            {currentLanguage}
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: '#1e1e1e',
              color: '#dcdcdc',
              padding: 2,
              borderRadius: 1,
              overflowX: 'auto',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontSize: '0.875rem',
            }}
          >
            {codeExamples[currentLanguage]}
          </Box>
          <Button
            onClick={() => copyToClipboard(codeExamples[currentLanguage])}
            variant="contained"
            color="primary"
            sx={{ mt: 2, fontFamily: 'Dosis' }}
          >
            Copy
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CodeModal;
