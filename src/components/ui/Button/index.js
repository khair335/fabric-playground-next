import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';


const Button = ({ mode, variant, size, icon, iconPosition, children, onClick, href, disabled, className, ...props }) => {
  const buttonClass = classNames(
    'px-6 py-0 w-fit flex justify-center items-center gap-6 transition-all duration-300 font-inter    focus:outline-none focus:ring-offset-0 focus:ring-offset-transparent ',
    {
      'bg-primary-10 text-white ring-2 ring-primary-10 hover:bg-primary-8 hover:ring-primary-8 focus:hover:ring-primary-8 focus:ring-primary-4': variant === 'Primary' && !disabled,
      'bg-transparent text-primary-10 ring-2 ring-primary-10 hover:bg-transparent hover:ring-primary-8 text-primary-10 hover:text-primary-8 focus:hover:ring-primary-8': variant === 'Secondary' && !disabled,
      'bg-transparent text-primary-10  ring-0  hover:ring-tertiary-8': variant === 'Tertiary' && !disabled,
      'bg-bw-2 text-bw-5 ring-bw-2 cursor-not-allowed': disabled,
    },
    {
      'h-12  rounded-xl text-sm lg:text-lg leading-5 lg:leading-6 font-semibold': size === 'Big',
      'h-10  rounded-lg text-base font-semibold leading-6': size === 'Medium',
      'h-9  rounded text-sm font-semibold leading-5': size === 'Small',
    },

    {
      'cursor-pointer': !disabled,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="icon-left">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="icon-right">{icon}</span>}
    </>
  );

  if (mode === 'cta') {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['button', 'cta']),
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Tertiary']),
  size: PropTypes.oneOf(['Big', 'Medium', 'Small']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  mode: 'button',
  variant: 'Primary',
  size: 'Medium',
  iconPosition: 'left',
  onClick: () => {},
  href: '#',
  disabled: false,
  className: '',
};

export default Button;