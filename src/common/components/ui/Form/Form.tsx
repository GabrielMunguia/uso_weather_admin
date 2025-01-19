import { BreadcrumbItem, Breadcrumbs, Card } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
interface IBreadcrumb {
  label: string;
  href: string;
}
interface IProps {
  form: UseFormReturn<any>;
  children: React.ReactNode;
  isLoading?: boolean;
  title?: string;
  breadcrumb?: IBreadcrumb[];
  currentTabName?: string;
}

const Form = ({
  form,
  children,
  isLoading,
  title,
  breadcrumb = [],
  currentTabName,
}: IProps) => {
  return (
    <FormProvider {...form}>
      <div className='w-full'>
        {title ? (
          <h1 className='my-2 text-2xl font-semibold'>{title}</h1>
        ) : null}

        {breadcrumb.length > 0 && (
          <div className='my-4'>
            <Breadcrumbs>
              {breadcrumb.map((b, index) => (
                <BreadcrumbItem key={index}>
                  <Link href={b.href}>{b.label}</Link>
                </BreadcrumbItem>
              ))}
              <BreadcrumbItem>{currentTabName}</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        )}

        <Card
          className={` w-full  p-2 rounded-lg shadow-lg border overflow-visible ${isLoading ? 'animate-pulse' : ''}`}
        >
          {' '}
          {children}
        </Card>
      </div>
    </FormProvider>
  );
};

export default Form;
