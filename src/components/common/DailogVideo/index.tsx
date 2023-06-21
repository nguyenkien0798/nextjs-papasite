import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import ReactPlayer from 'react-player';

const DailogVideo = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const videoUrl = 'https://youtube.com/embed/ue80QwXMRHg';
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        
        maxWidth={'lg'}
        sx={{
          justifyContent: 'center',
          borderRadius: '12px',
          '& .MuiPaper-root': {
            borderRadius: '16px',
          },
        }}
      >
        <div className="relative h-[567px] w-[55.260vw] rounded-[12px]">
        <iframe
          className="h-[567px] w-[55.260vw] rounded-[12px]"
          src={videoUrl}
          allowFullScreen
        />
        </div>
      </Dialog>
    </>
  );
};

export default DailogVideo;
