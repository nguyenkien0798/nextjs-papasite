import classNames from 'classnames/bind'
import { motion } from 'framer-motion'
import * as React from 'react'
import styles from '@/styles/Button.module.css'

const cx = classNames.bind(styles)
export interface IButtonProps {
  value?: any
  onClick?: (e: any) => void
  className?: any
  textClassName?: any
  iconClassName?: any
  data?: any
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  initial?: string
  animate?: string
  variants?: any
  transition?: any
  link?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  (props: IButtonProps, ref: any) => {
    const {
      value,
      onClick,
      className,
      textClassName,
      iconClassName,
      data,
      leftIcon,
      rightIcon,
      link,
      ...restProps
    } = props

    let Comp = 'button'

    if (link) {
      Comp = 'a'
    }

    const MotionLink = motion(Comp) as any // dont know what data type to declare :(

    const handleClick = (e: any) => {
      if (!onClick) return
      onClick(e)
    }

    const btnProps = {
      onClick: handleClick,
      ...restProps,
    }

    const Btnclasses = cx('', {
      [className]: className,
    })

    const textClasses = cx('', {
      [textClassName]: textClassName,
    })

    const iconClasses = cx('', {
      [iconClassName]: iconClassName,
    })

    return (
      <motion.button ref={ref} className={Btnclasses} {...btnProps}>
        {leftIcon && (
          <span
            className={`left-icon inline-flex h-full w-12 items-center justify-center md:w-16 ${iconClasses}`}
          >
            {leftIcon}
          </span>
        )}
        <span className={`btn-text z-10 font-montserrat tracking-wider  ${textClasses}`}>
          {value}
        </span>
        {rightIcon && (
          <span
            className={`right-icon inline-flex h-full w-12 items-center justify-center md:w-16 ${iconClasses}`}
          >
            {rightIcon}
          </span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
