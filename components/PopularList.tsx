import { Button, List } from '@/components';

const PopularList = () => {
  const popularPost = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Doe' },
    { id: '3', firstName: 'Gildong', lastName: 'Hong' },
  ];

  return (
    <List
      className="bg-primary"
      items={popularPost}
      keyExtractor={({ id }) => id}
      render={(item) => item.firstName}
      right={<Button text="list button" />}
    />
  );
};

export default PopularList;
