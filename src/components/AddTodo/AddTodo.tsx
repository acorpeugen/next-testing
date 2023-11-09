'use client';
import { useOptimistic } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TextField,
  Button,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

import { addTodo } from '@actions';

import type { PropsSchema } from './validation';
import type { Todos, Todo } from './types';

import { validationSchema } from './validation';
import * as S from './styled';

export function AddTodo({ todos }: Todos) {
  const {
    reset,
    register,
    control,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<PropsSchema>({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(validationSchema),
  });

  const [optimisticTodo, setOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    },
  );

  return (
    <S.Container>
      <S.Title>Todo List</S.Title>
      <S.FormAddTodo
        action={async (formData: FormData) => {
          const id = formData.get('id');
          const description = formData.get('description') as string;
          reset();
          setOptimisticTodo({
            id: Number(id),
            description,
          });
          await addTodo(formData);
        }}
      >
        <TextField
          {...register('description')}
          required
          label="Enter you todo title"
          color="secondary"
          error={Boolean(errors.description)}
          helperText={errors.description && errors.description?.message}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          endIcon={<Add />}
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Add Todo
        </Button>
      </S.FormAddTodo>
      <DevTool {...{ control }} />
      <S.List>
        {optimisticTodo?.map(({ id, description }) => (
          <S.ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{id}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={description} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}
