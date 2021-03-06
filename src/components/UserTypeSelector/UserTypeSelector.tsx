import React, { useContext } from 'react';
import { ZellerCustomerContext } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { Heading, RadioButton, RadioButtonGroup, capitalise } from '../../../frontend-component';
import { UserType } from '../../enums';
import styles from './styles.scss';

export const UserTypeSelector: React.VFC = () => {
  const { userType, setUserType } = useContext<ZellerCustomerProviderContextProps>(
    ZellerCustomerContext,
  );

  const handleInputChange = (input: UserType) => {
    setUserType(input);
  };

  return (
    <>
      <Heading level={2}>User Type</Heading>
      <RadioButtonGroup
        name="User Type"
        onChange={handleInputChange}
        value={userType}
      >
        {Object.values(UserType).map((type: string) => (
          <RadioButton
            key={type}
            id={type}
            value={type}
          >
            <span className={styles.label}>{capitalise(type)}</span>
          </RadioButton>
        ))}
      </RadioButtonGroup>
    </>
  );
};
