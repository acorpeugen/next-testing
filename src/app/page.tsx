import { AddTodo } from '@components';

import { getTodos } from '../actions/actions';

export default async function Home() {
  const todos = await getTodos();

  return (
    <main>
      <AddTodo {...{ todos }} />
    </main>
  );
}
