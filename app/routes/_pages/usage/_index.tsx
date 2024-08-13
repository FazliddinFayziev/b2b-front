import React, { useState } from 'react';
import { BarChartComponent, LineChartComponent } from '~/components';
import { Box, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

// Define data for each month
const dataByMonth: { [key: string]: any } = {
  August: {
    lineChartData: [
      { name: 'Week 1', value: 400 },
      { name: 'Week 2', value: 300 },
      { name: 'Week 3', value: 500 },
      { name: 'Week 4', value: 700 },
    ],
    barChartData: [
      { name: 'Week 1', value: 50 },
      { name: 'Week 2', value: 40 },
      { name: 'Week 3', value: 60 },
      { name: 'Week 4', value: 80 },
    ],
    billing: 123.45,
  },
  September: {
    lineChartData: [
      { name: 'Week 1', value: 300 },
      { name: 'Week 2', value: 400 },
      { name: 'Week 3', value: 600 },
      { name: 'Week 4', value: 500 },
    ],
    barChartData: [
      { name: 'Week 1', value: 45 },
      { name: 'Week 2', value: 55 },
      { name: 'Week 3', value: 70 },
      { name: 'Week 4', value: 65 },
    ],
    billing: 150.75,
  },
};

// =================== START STYLES ================================================>
const container = { p: 2, maxHeight: '80vh', overflowY: 'auto' }
const usage = { mb: 2, fontWeight: 600, fontFamily: 'Dosis' }
const select = { bgcolor: 'background.paper', borderRadius: 1 }
const font = { fontFamily: 'Dosis' }
const graphCon = { display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }
const outputToken = { mb: 1, fontWeight: 500, fontFamily: 'Dosis' }
const fileUpload = { mb: 1, fontWeight: 500, fontFamily: 'Dosis' }
const billingCard = { flex: 1, p: 2, borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }
const currentBill = { fontWeight: 500, fontFamily: 'Dosis', textAlign: 'center' }
const price = { fontWeight: 600, fontFamily: 'Dosis', color: 'primary.main', textAlign: 'center', mb: 1 }
const monthBill = { fontFamily: 'Dosis', textAlign: 'center' }
const billTime = { fontFamily: 'Dosis', textAlign: 'center' }
// ================== END STYLES ===================================================>

const Usage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(Object.keys(dataByMonth)[0]);

  const months = Object.keys(dataByMonth);

  const { lineChartData, barChartData, billing } = dataByMonth[selectedMonth];

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setSelectedMonth(event.target.value as string);
  };

  return (
    <Box sx={container}>
      <Typography variant="h4" sx={usage}>
        Usage
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel sx={font}>Month</InputLabel>
        <Select
          sx={select}
          label="Month"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <MenuItem sx={font} key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={graphCon}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" sx={outputToken}>
            Tokens Output by Week
          </Typography>
          <Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ height: { xs: 200, md: 300 } }}>
              <LineChartComponent data={lineChartData} />
            </Box>
          </Paper>

          <Typography variant="h6" sx={fileUpload}>
            File Uploads by Week
          </Typography>
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ height: { xs: 200, md: 300 } }}>
              <BarChartComponent data={barChartData} />
            </Box>
          </Paper>
        </Box>

        <Card sx={billingCard}>
          <CardContent>
            <Typography variant="h6" sx={currentBill}>
              Current Billing
            </Typography>
            <Typography variant="h4" sx={price}>
              ${billing.toFixed(2)}
            </Typography>
            <Typography sx={monthBill} variant="body1">
              Monthly Billing
            </Typography>
            <Typography sx={billTime} variant="body2">
              {new Date().toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Usage;
