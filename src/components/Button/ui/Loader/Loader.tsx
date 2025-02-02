import LoaderPRimaryIcon from '@/assets/icons/loader.svg?react';
import LoaderSecondaryIcon from '@/assets/icons/loaderSecondary.svg?react';
import { cn } from '@/lib/cn.ts';

import { useButtonContext } from '../../context';

import styles from './Loader.module.css';

export const Loader = () => {
  const { loading, size, variant } = useButtonContext();

  return (
    <div className={cn(styles[size])}>
      {loading && (
        <div className={styles.loaderContainer}>
          {
            {
              primary: <LoaderPRimaryIcon className={styles.loader} />,
              secondary: <LoaderSecondaryIcon className={styles.loader} />
            }[variant]
          }
        </div>
      )}
    </div>
  );
};
