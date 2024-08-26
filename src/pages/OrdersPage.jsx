import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';//This is styling for all texts 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OrdersByCustomerID from '../inputs/OrdersByCustomerID';
import OrdersByAddressID from '../inputs/OrdersByAddressID';
import OrdersByStatus from '../inputs/OrdersByStatus';
import OrderDateBetween from '../inputs/OrderDateBetween';
import PriceRange from '../inputs/PriceRange';

function OrdersPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="70vw">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', pt: 4 }}>
        <Typography 
        variant="h1" no-gutters>
        Find Orders By:
      </Typography>
          <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tab label="Customer" />
              <Tab label="Price greater" />
              <Tab label="Address" />
              <Tab label="Status" />
              <Tab label="Dates" />
            </Tabs>
            <CardContent>
              {value === 0 && <OrdersByCustomerID />}
              {value === 1 && <PriceRange />}
              {value === 2 && <OrdersByAddressID />}
              {value === 3 && <OrdersByStatus />}
              {value === 4 && <OrderDateBetween />}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default OrdersPage;
