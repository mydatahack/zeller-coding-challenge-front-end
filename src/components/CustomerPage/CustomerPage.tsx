import React, { useContext } from 'react';
import { ZellerCustomerContext } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { HorizontalLine, Heading, CubeLoadingSpinner } from '../../../frontend-component';
import { UserTypeSelector } from '../UserTypeSelector';
import { UserInfoTable } from '../UserInfoTable';
import styles from './styles.scss';

export const CustomerPage: React.FC = () => {
  const { fetched } = useContext<ZellerCustomerProviderContextProps>(
    ZellerCustomerContext,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.withController}>
        {fetched
          ? (
            <>
              <Heading level={1} className={styles.appHeading}>Zeller Customer App 🤙</Heading>
              <HorizontalLine className={styles.hr} />
              <UserTypeSelector />
              <HorizontalLine className={styles.hr} />
              <UserInfoTable />
              <HorizontalLine className={styles.hr} />
            </>
          )
          : (
            <div className={styles.spinnerContainer}>
              <CubeLoadingSpinner />
            </div>
          )}
      </div>
    </div>
  );
};
