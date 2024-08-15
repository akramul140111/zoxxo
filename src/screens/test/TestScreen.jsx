import CheckIcon from '@mui/icons-material/Check';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomMeta from '../../components/CustomMeta';
import routeLinks from '../../config/routeLinks';

//Multilanguage
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../i18n.js';
import { ColorModeContext, tokens } from '../../theme.js';
import LanguageModal from '../../components/Header/LanguageModal.jsx';



const TestScreen = () => {
  //for language
  const { t } = useTranslation('auth');
  const { language: currentLanguage, changeLanguage } = useLanguage();

  //for color mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    handleCloseModal();
  };

  //for toast
  const handleToast = () => {
    toast.success('Button Clicked');
  };
  return (
    <Container display={'flex'} gap={5} sx={{my: 20}}>
      <Typography variant='h4'>Environment Variable: {import.meta.env.VITE_BACKEND_URL}</Typography>

      <CustomMeta title='Test' />
      {/* Color Mode Change */}
      <Typography variant='caption'>
        {' '}
        Click The button to change mode: zoxxo
      </Typography>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
      <Divider />

      {/* Language Change  */}
      {[
        { name: 'English', key: 'en' },
        { name: 'Deutsch', key: 'de' },
      ].map((lang) => (
        <Button
          variant='primary'
          key={lang.name}
          sx={{
            my: '2',
            width: '130px',
            fontWeight: 'semibold',
          }}
          onClick={() => changeLanguage(lang.key)}
          startIcon={
            <CheckIcon
              color={lang.name === currentLanguage.name ? 'success' : 'error'}
            />
          }
        >
          {lang.name}
        </Button>
      ))}
      <LanguageModal />
      <Typography variant='body1'> {t('continue-with-google')}</Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant='caption'> Sample Icon: </Typography>

      <FavoriteIcon />
      <Divider sx={{ my: 2 }} />

      {/* See Toast */}

      <Button variant='contained' onClick={handleToast} sx={{ mx: 5 }}>
        See Toast
      </Button>

            <Grid>

        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        
        <LanguageModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleLanguageChange={handleLanguageChange}
      />
      </Grid>
      <Button color="inherit" onClick={handleOpenModal}>
            Change Language
          </Button>
      <Link to={routeLinks.home}>Back To Home</Link>
    </Container>
  );
};

export default TestScreen;