export type StyledProps = {};

export type Todo = {
  id?: number;
  createdAt?: Date;
  description: string;
};

export type Todos = StyledProps & {
  todos: Todo[];
};
