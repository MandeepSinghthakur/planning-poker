import { Divider, Slide, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Favorite  from '@material-ui/icons/Favorite';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Slide in={true} direction='up' timeout={3000}>
        <div className='FooterSection'>
          <Divider variant='middle'></Divider>
          <div className='FooterContainer'>
            <div className='FooterItemContainer'>
              <CopyrightIcon color='secondary' fontSize='small' />
              <Typography color='textSecondary' variant='body2'>
                Mandeep Singh
              </Typography>
            </div>

            <Divider orientation='vertical' flexItem></Divider>
            <div className='FooterItemContainer'>
              <Typography color='textSecondary' variant='body2'>
                Feedback: mandeep419.singh@gmail.com
              </Typography>
            </div>

            <Divider orientation='vertical' flexItem></Divider>
              <Typography color='textSecondary' variant='body2'>
               Made with {' '}
               <Favorite color='error' fontSize='small' />
               {' '} from California
              </Typography>
          </div>
        </div>
      </Slide>
    </footer>
  );
};
