import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { typoMonstruos } from './misc/typeMonster';
import { getMonsterCards } from './store/thunks';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import lightIcon from './assets/LIGHT.svg';
import darkIcon from './assets/DARK.svg';
import earthIcon from './assets/EARTH.svg';
import fireIcon from './assets/FIRE.svg';
import waterIcon from './assets/WATER.svg';
import windIcon from './assets/WIND.svg';
import { attributesGame } from './misc/attributes';
const Game = () => {
    const [colorBackground,setColorBackground] = useState('white');
    const { carta1 } = useSelector((state) => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMonsterCards());
    }, []);

    const imageUrl = carta1?.card_images?.[0]?.image_url_cropped;

    const respuestaJuego = (atributoCarta) => {
        const resp = (atributoCarta === (carta1.attribute).toLowerCase()) ? 'green':'red';
        setColorBackground(resp);
    }

    return (
        <>
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <h2 >Adivina el atributo de la carta</h2>

        </Box>
            <Box display="flex" gap={2}>
                <Box sx={{ width: '50%', bgcolor: colorBackground, p: 2,m:2, display: 'flex', justifyContent: 'center' }}>
                    {imageUrl ? (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={imageUrl}
                                alt={carta1?.name || 'Carta'}
                            />
                        </Card>
                    ) : (
                        <Typography variant="h6">Cargando carta...</Typography>
                    )}
                </Box>
                <Box sx={{ width: '50%', p: 2 }}>
                    <IconButton onClick={() => respuestaJuego(attributesGame[0])}>
                        <img
                            src={lightIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}
                        />
                    </IconButton>
                    <IconButton onClick={() => respuestaJuego(attributesGame[1])}>
                        <img
                            src={darkIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}

                        />
                    </IconButton>
                    <IconButton onClick={() => respuestaJuego(attributesGame[4])}>
                        <img
                            src={earthIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}
                        />
                    </IconButton>
                    <IconButton onClick={() => respuestaJuego(attributesGame[3])}>
                        <img
                            src={fireIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}
                        />
                    </IconButton>
                    <IconButton onClick={() => respuestaJuego(attributesGame[2])}>
                        <img
                            src={waterIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}
                        />
                    </IconButton>
                    <IconButton onClick={() => respuestaJuego(attributesGame[5])}>
                        <img
                            src={windIcon}
                            alt="luz"
                            style={{ width: 45, height: 45 }}
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default Game
