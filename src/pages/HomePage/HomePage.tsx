import { Grid, Slide } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import './HomePage.css';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  const isJoin = useRouteMatch('/join');

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid container item sm={12} lg={11} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide direction='down' in={true} timeout={1000}>
            <div className='HomePageContainer'>
                <RecentGames />
              </div>
            </Slide>
          </Grid>
          <Grid item sm={12} lg={6}>
            <div className='HomePageContainer'>{isJoin ? <JoinGame /> : <CreateGame />}</div>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default HomePage;
