import { Stack, Box } from "@mui/material";
import {VideoCard, ChannelCard} from './'

const Videos = ({ videos }) => {
  // console.log("🚀 ~ file: Videos.jsx:4 ~ Videos ~ Videos", videos);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
          {item.id.videoId && <VideoCard video={item} /> }
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
