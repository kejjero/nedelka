import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingCards() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress />
        </Box>
    );
}

export default LoadingCards;