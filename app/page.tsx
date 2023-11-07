import { Avatar, Button, Grid, Input, PopularList } from '@/components';

const Home = () => {
  return (
    <main>
      <Grid justify="center" align="center" className="grid-rows-3 grid-cols-2">
        <Button size="small" variant="secondary" text="Login" />
        <Avatar size="2xl" src="" alt="avatar test" />
        <Input />
        <PopularList />
      </Grid>
    </main>
  );
};
export default Home;
