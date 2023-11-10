import { AddTodo } from '@components';

export default async function Home() {

  return (
    <main>
      <AddTodo todos={[]} />
    </main>
  );
}
