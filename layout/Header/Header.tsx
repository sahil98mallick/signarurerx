import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Box, Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    const { mode, toggleColorMode } = useThemeContext();
    return (
        <>
            <Head>
                <title>Signature</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box className="imagecontainer">
                <Box className="CompanyLogo">
                    <img src="https://i.ibb.co/FXcRxx4/download.png" alt="III" className='Logo' onClick={toggleColorMode}/>
                </Box>
                {/* <Box className="headerbtn">
                    <Button onClick={toggleColorMode} size='small'>{mode == "dark" ? <LightModeIcon style={{ color: "whitesmoke" }} /> : <LightModeIcon style={{ color: "black" }} />}</Button>
                </Box> */}
            </Box>
        </>
    )
}

export default Header