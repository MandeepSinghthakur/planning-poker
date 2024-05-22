import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grow,
  IconButton,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { blue, green, orange, red } from '@material-ui/core/colors';
import RefreshIcon from '@material-ui/icons/Autorenew';
import Chip from '@material-ui/core/Chip';
import ExitToApp from '@material-ui/icons/ExitToApp';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlined from '@material-ui/icons/DeleteForeverTwoTone';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { finishGame, resetGame, removeGame } from '../../../service/games';
import { Game } from '../../../types/game';
import { isModerator } from '../../../utils/isModerator';
import { AlertDialog } from '../../../components/AlertDialog/AlertDialog';
import './GameController.css';
import { Status } from '../../../types/status';

interface GameControllerProps {
  game: Game;
  currentPlayerId: string;
}


export const GameController: React.FC<GameControllerProps> = ({ game, currentPlayerId }) => {
  const history = useHistory();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const copyInviteLink = () => {
    const dummy = document.createElement('input');
    const url = `${window.location.origin}/join/${game.id}`;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setShowCopiedMessage(true);
  };

  const leaveGame = () => {
    history.push(`/`);
  };

  const handleRemoveGame = async (recentGameId: string) => {
    await removeGame(recentGameId);
    window.location.href = '/';
  };

  return (
    <Grow in={true} timeout={2000}>
      <div className='GameController'>
        <Card variant='outlined' className='GameControllerCard'>
          <CardHeader
            title={game.name}
            titleTypographyProps={{ variant: 'h6' }}
            action={
              <div className='GameControllerCardHeaderAverageContainer'>
                        {isModerator(game.createdById, currentPlayerId, game.isAllowMembersToManageSession) && (
              <>
                <div className='GameControllerButtonContainer'>
                  <div className='GameControllerButton'>
                    <IconButton
                      onClick={() => finishGame(game.id)}
                      data-testid='reveal-button'
                      color='primary'
                    >
                      <VisibilityIcon fontSize='small' style={{ color: green[500] }} />
                    </IconButton>
                  </div>
                  <Typography variant='caption'>Reveal</Typography>
                </div>

                <div className='GameControllerButtonContainer'>
                  <div className='GameControllerButton'>
                    <IconButton data-testid='restart-button' onClick={() => resetGame(game.id)}>
                      <RefreshIcon fontSize='small' color='error' />
                    </IconButton>
                  </div>
                  <Typography variant='caption'>Restart</Typography>
                </div>

                <div className='GameControllerButtonContainer'>
                  <div className='GameControllerButton'>
                    <AlertDialog
                      title='Remove this session'
                      message={`Are you sure? This will delete this session and remove all players.`}
                      onConfirm={() => handleRemoveGame(game.id)}
                      data-testid='delete-button-dialog'
                    >
                      <IconButton>
                        <DeleteOutlined fontSize='small' style={{ color: red[300] }} />
                      </IconButton>
                    </AlertDialog>
                  </div>
                  <Typography variant='caption'>Delete</Typography>
                </div>
              </>
            )}
            <div className='GameControllerButtonContainer'>
              <div className='GameControllerButton'>
                <IconButton data-testid='exit-button' onClick={() => leaveGame()}>
                  <ExitToApp fontSize='small' style={{ color: orange[500] }} />
                </IconButton>
              </div>
              <Typography variant='caption'>Exit</Typography>
            </div>
            <div title='Copy invite link' className='GameControllerButtonContainer'>
              <div className='GameControllerButton'>
                <IconButton data-testid='invite-button' onClick={() => copyInviteLink()}>
                  <LinkIcon fontSize='small' style={{ color: blue[500] }} />
                </IconButton>
              </div>
              <Typography variant='caption'>Invite</Typography>
            </div>
              </div>
            }
            className='GameControllerCardTitle'
          ></CardHeader>
          <CardContent className='GameControllerCardContentArea'>
           <Typography variant='subtitle1'>{game.gameStatus}</Typography>
           {
            game.gameStatus === Status.Finished && <Divider className='GameControllerDivider' orientation='vertical' flexItem />
           }
           {game.gameStatus ===  Status.Finished && game.scoresDict && Object.keys(game.scoresDict).map((key) => {
            const text = key + ' : ' +  game.scoresDict![key] + ' Vote'
            return <>
                  <Chip label={text} />
                </>
           })
          
          
            
           }
            <Divider className='GameControllerDivider' orientation='vertical' flexItem />
                      <Typography variant='subtitle1'>Average:</Typography>
                      <Typography
                        variant='subtitle1'
                        className='GameControllerCardHeaderAverageValue'
                      >
                        {game.average || 0}
                      </Typography>
                    
          </CardContent>
        </Card>
        <Snackbar
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          open={showCopiedMessage}
          autoHideDuration={5000}
          onClose={() => setShowCopiedMessage(false)}
        >
          <Alert severity='success'>Invite Link copied to clipboard!</Alert>
        </Snackbar>
      </div>
    </Grow>
  );
};
