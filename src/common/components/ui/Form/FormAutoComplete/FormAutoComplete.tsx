'use client';
import { Button, Card, Input } from '@nextui-org/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import { useFormAutoCompleteStore } from './FormAutoComplete.store';
import { v4 as uuidv4 } from 'uuid';
interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined' | undefined;
  isUpperCase?: boolean;
  onChangeValue?: (value: string) => void;
  onKeyDownEvent?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLenght?: number;
  options: { value: string; label: string }[];
}

const FormAutoComplete = ({
  name = '',
  label = '',
  options,
  onKeyDownEvent,
  placeholder = '',
  maxLength,
  type = 'text',
  className,
  onChangeValue,
  variant = 'bordered',
}: IProps) => {
  const form = useFormContext();

  const { setFocus, addInput, getIsFocus } = useFormAutoCompleteStore();
  const [suggest, setSuggest] = useState<{ value: string; label: string }[]>(
    options.slice(0, 5),
  );
  const [codeInput] = useState(uuidv4());
  const isFocus = getIsFocus(codeInput);

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>();
  const { errors } = form.formState;
  const errorMessage = errors?.[name]?.message?.toString() ?? '';
  const [text, setText] = useState('');
  const formValue = form.getValues(name);

  const setSuggestValue = (value: string) => {
    const filter = options.filter(
      (option) =>
        option.label.toLowerCase().includes(value.toLowerCase()) ||
        option.value.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggest(filter.slice(0, 5));
  };

  useEffect(() => {
    addInput(codeInput);
  }, [addInput, codeInput]);

  useEffect(() => {
    const option = options.find(
      (option) => option.value.toLowerCase() == (formValue + '').toLowerCase(),
    );

    if (!option || option.value === '' || option == undefined) {
      setText('');
      return;
    }
    setText(`${option.label}`);
  }, [formValue, options]);
  const acceptSuggest = useCallback(() => {
    if (selectedOption) {
      onChangeValue && onChangeValue(selectedOption.value);
      form.setValue(name, selectedOption.value);

      setFocus(codeInput, false);
    }
  }, [codeInput, form, name, selectedOption, setFocus, onChangeValue]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.form-search')) {
        setFocus(codeInput, false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [codeInput, setFocus]);

  useEffect(() => {
    if (isFocus) return;
    setSuggest(options.slice(0, 5));
    setSelectedOption(undefined);
  }, [isFocus, options]);

  return (
    <div
      className='my-3 w-full relative form-search'
      onClick={() => {
        setFocus(codeInput, true);
      }}
    >
      <input type='hidden' {...form.register(name)} />
      <Input
        value={text}
        onKeyDown={(e) => {
          onKeyDownEvent && onKeyDownEvent(e);
        }}
        className={className}
        label={label}
        placeholder={placeholder}
        type={type}
        variant={variant}
        isInvalid={!!errors[name]}
        errorMessage={errorMessage}
        maxLength={maxLength}
      />

      {isFocus && (
        <div className='relative'>
          <div className='absolute top-1  z-[50] left-[50%] w-[15px] h-[15px] transform rotate-45  bg-white border-2 border-white-500'></div>
          <Card
            className='absolute w-full mt-3  drop-shadow-xl p-3   mb-10
           rounded-lg h-[19rem]  border-gray-200 border-1 z-50'
          >
            <Input
              placeholder='Buscar'
              startContent={<MdOutlineSearch />}
              variant='bordered'
              className='border-[#01e4a0] my-1'
              size={'sm'}
              onChange={(e) => {
                setSuggestValue(e.target.value);
              }}
            />

            <div className='overflow-y-auto h-[12rem]'>
              {suggest.map((option, i) => {
                return (
                  <div
                    key={i}
                    className={`p-2 text-xs  hover:bg-gray-200 dark:hover:bg-zinc-800
                       cursor-pointer  rounded-lg  z-50 ${selectedOption?.value === option.value ? 'bg-gray-200 dark:bg-zinc-800                        ' : ''}`}
                    onMouseDown={() => {
                      setSelectedOption(option);
                    }}
                  >
                    <span>{option.label}</span>
                  </div>
                );
              })}
            </div>

            <div className='flex justify-between gap-3 '>
              <Button
                size='sm'
                color='primary'
                className='w-full '
                onClick={acceptSuggest}
              >
                Seleccionar
              </Button>
              <Button
                size='sm'
                variant='flat'
                className='w-full'
                onClick={() => {
                  setSuggest(options.slice(0, 5));
                  setFocus(codeInput, false);
                  setSelectedOption(undefined);
                  setText('');
                  form.setValue(name, '');
                }}
              >
                Limpiar
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FormAutoComplete;
