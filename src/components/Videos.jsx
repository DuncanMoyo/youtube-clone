import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  // console.log("🚀 ~ file: Videos.jsx:4 ~ Videos ~ Videos", videos);
  if(!videos?.length) return <Loader />
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="inherit"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
