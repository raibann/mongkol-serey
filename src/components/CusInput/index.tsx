import { Input } from '@mui/material';
import React from 'react';
interface ICusInput {
  children: React.ReactNode;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  aspect: number;
  imgSize?: number;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}
export default function CusInput(props: ICusInput) {
  const { children, setFile, id, aspect, imgSize, onChange } = props;
  return (
    <>
      <label htmlFor={id}>
        <Input
          inputProps={{
            accept: '.jpg, .png',
            id: id,
            multiple: true,
          }}
          type='file'
          sx={{ display: 'none' }}
          onChange={onChange}
        />
        {children}
      </label>
    </>
  );
}
