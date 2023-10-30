import { FC } from 'react';
import { Props } from './types';

import { useData } from './hooks';
import * as S from './styled';

export const TemplateName: FC<Props> = () => {
  const { data } = useData();
  return (
    <S.TemplateName>
      {data.map(({ id, label }) => (
        <div key={id}>
          <span>{label}</span>
        </div>
      ))}
    </S.TemplateName>
  );
};
