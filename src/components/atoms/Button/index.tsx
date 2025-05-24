import { twMerge } from '@/lib/tailwind-merge';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ButtonProps } from './index.types';

export const buttonVariants = cva(
  'rounded-sm transition-colors disabled:cursor-not-allowed group',
  {
    variants: {
      variant: {
        fill: 'disabled:bg-neutral-gray-3 disabled:text-neutral-gray-4',
        outline:
          'border bg-transparent disabled:border-neutral-gray-4 disabled:text-neutral-gray-4',
        text: 'disabled:text-neutral-gray-4',
      },
      color: {
        primary: '',
        white: '',
        black: '',
      },
      size: {
        sm: 'px-2 h-8 text-caption-md',
        md: 'px-4 h-10 text-button-lg',
        lg: 'px-4 h-12 text-button-lg',
        xl: 'px-4 h-14 text-button-lg',
      },
      icon: {
        true: 'inline-flex items-center',
        false: null,
      },
      loading: {
        true: 'inline-flex items-center justify-center min-w-28',
        false: null,
      },
    },
    compoundVariants: [
      {
        variant: 'fill',
        color: 'primary',
        className:
          'bg-primary text-neutral-white hover:bg-primary-shade-2 focus:bg-primary-shade-3',
      },
      {
        variant: 'fill',
        color: 'white',
        className:
          'bg-primary-tint-1 text-primary hover:bg-primary-tint-2 focus:bg-primary-tint-3',
      },
      {
        variant: 'fill',
        color: 'black',
        className:
          'bg-neutral-gray-7 text-neutral-white hover:bg-neutral-gray-8 focus:bg-neutral-black',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'border-primary text-primary hover:border-primary-shade-2 hover:text-primary-shade-2 focus:border-primary-shade-3 focus:text-primary-shade-3',
      },
      {
        variant: 'outline',
        color: 'white',
        className:
          'border-neutral-white text-neutral-white hover:border-neutral-gray-1 hover:text-neutral-gray-1 focus:border-neutral-gray-3 focus:text-neutral-gray-3',
      },
      {
        variant: 'outline',
        color: 'black',
        className:
          'border-neutral-gray-7 text-neutral-gray-7 hover:border-neutral-gray-8 hover:text-neutral-gray-8 focus:border-neutral-black focus:text-neutral-black',
      },
      {
        variant: 'text',
        color: 'primary',
        className:
          'text-primary hover:text-primary-shade-2 focus:text-primary-shade-3',
      },
      {
        variant: 'text',
        color: 'white',
        className:
          'text-neutral-white hover:text-neutral-gray-1 focus:text-neutral-gray-3',
      },
      {
        variant: 'text',
        color: 'black',
        className:
          'text-neutral-gray-7 hover:text-neutral-gray-8 focus:text-neutral-black',
      },
      {
        icon: true,
        size: 'sm',
        className: 'gap-1',
      },
      {
        icon: true,
        size: 'md',
        className: 'gap-2',
      },
      {
        icon: true,
        size: 'lg',
        className: 'gap-2',
      },
      {
        icon: true,
        size: 'xl',
        className: 'gap-2',
      },
    ],
    defaultVariants: {
      variant: 'fill',
    },
  }
);

const iconVariants = cva(undefined, {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-6',
      xl: 'size-6',
    },
  },
});

const loadingVariants = cva(
  'border-t-transparent rounded-full animate-spin [animation-duration:500ms] group-disabled:border-t-transparent group-disabled:border-neutral-gray-4',
  {
    variants: {
      buttonVariant: {
        fill: '',
        outline: '',
        text: '',
      },
      size: {
        sm: 'size-3 border',
        md: 'size-4 border-2',
        lg: 'size-5 border-3',
        xl: 'size-6 border-4',
      },
      color: {
        primary: '',
        white: '',
        black: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        buttonVariant: 'fill',
        className: 'border-neutral-white',
      },
      {
        color: 'primary',
        buttonVariant: ['outline', 'text'],
        className: 'border-primary',
      },
      {
        color: 'white',
        buttonVariant: 'fill',
        className: 'border-primary',
      },
      {
        color: 'white',
        buttonVariant: ['outline', 'text'],
        className: 'border-neutral-white',
      },
      {
        color: 'black',
        buttonVariant: 'fill',
        className: 'border-neutral-white',
      },
      {
        color: 'black',
        buttonVariant: ['outline', 'text'],
        className: 'border-neutral-black',
      },
    ],
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      variant = 'fill',
      color = 'primary',
      size = 'md',
      loading = false,
      prefixIcon,
      suffixIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        {...props}
        className={twMerge(
          buttonVariants({
            variant,
            icon: !!prefixIcon || !!suffixIcon,
            color,
            size,
            loading,
            className,
          })
        )}
      >
        {loading ? (
          <span
            className={loadingVariants({ color, size, buttonVariant: variant })}
          />
        ) : (
          <>
            <Slot className={iconVariants({ size })}>{prefixIcon}</Slot>
            <Slottable>{children}</Slottable>
            <Slot className={iconVariants({ size })}>{suffixIcon}</Slot>
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export default Button;
