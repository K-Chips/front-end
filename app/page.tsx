import { Avatar } from '@/components';
import PopularList from '@/components/PopularList';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input';

const Home = () => {
  return (
    <main className="bg-black">
      <Button size="small" variant="secondary" text="Login" />
      <Avatar size="md" src="" alt="avatar test" />
      <Input />
      <PopularList />
    </main>
  );
};
export default Home;
