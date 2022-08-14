import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React from "react";

const LoadingCards: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress />
        </Box>
    );
}

export default LoadingCards;