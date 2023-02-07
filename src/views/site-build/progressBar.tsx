import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useEffect, useRef, useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    width: '60%',
    position: 'sticky',
    margin: '0 auto',
    marginTop: '-11rem',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#b3642d' : '#b3642d',
    },
}));


export default function CustomizedProgressBars() {

    const [progress, setProgress] = useState(0);
    let timer: any = useRef();

    useEffect(() => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 20) {
                        return prev + 1;
                    }
                    if (prev === 100) {
                        clearInterval(timer.current);
                    }
                    return prev;
                });
            }, 100);
        }
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={progress} />
        </Box>
    );
}