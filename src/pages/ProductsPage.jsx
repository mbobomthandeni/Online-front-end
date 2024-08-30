import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';//This is styling for all texts
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default ProductsPage;

function ProductsPage(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="70vw">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', pt: 4, align: 'center'}}>
                    <Typography
                        variant="h1" no-gutters>
                        Products:
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
                            <Tab label="Create" />
                            <Tab label="Read" />
                            <Tab label="Update" />
                            <Tab label="Delete" />
                            <Tab label="Get All" />
                        </Tabs>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </React.Fragment>
    );
}
