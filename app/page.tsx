import {
  Avatar,
  Button,
  Grid,
  Input,
  PopularList,
  Typography,
} from '@/components';

const Home = () => {
  return (
    <main>
      <Grid justify="center" align="center" className="grid-rows-3 grid-cols-2">
        <Button size="small" variant="secondary" text="Login" />
        <Avatar size="4xl" src="" alt="avatar test" />
        <Avatar size="md" src="" alt="avatar test" />
        <Input />
        <PopularList />
        <Typography variant="h1">title</Typography>
        <Typography variant="p1">description</Typography>
      </Grid>
    </main>
  );
};
export default Home;
