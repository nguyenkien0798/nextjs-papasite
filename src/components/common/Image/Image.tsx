import React, { useCallback, useState } from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { motion } from 'framer-motion'
import classNames from 'classnames'

const variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
}

interface ImageProps extends NextImageProps {
  containerClassName?: string
}

const Image: React.FC<ImageProps> = ({ onLoadingComplete, ...props }) => {
  const { containerClassName, ...rest } = props

  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete: NextImageProps['onLoadingComplete'] = useCallback(
    (result: { naturalWidth: number; naturalHeight: number }) => {
      setIsLoaded(true)
      onLoadingComplete && onLoadingComplete(result)
    },
    [onLoadingComplete]
  )

  return (
    <motion.div
      initial="hidden"
      variants={variants}
      animate={isLoaded ? 'visible' : 'hidden'}
      className={classNames(containerClassName)}
    >
      <NextImage onLoadingComplete={handleLoadingComplete} {...rest} />
    </motion.div>
  )
}

export default Image
