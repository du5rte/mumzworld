import React from 'react';
import { useTranslation } from 'react-i18next';
import useCurrency from '@/hooks/useCurrency';
import TextButton from '../text-button';

export interface CurrencyTogglerProps {}

export function CurrencyToggler(props: CurrencyTogglerProps) {
  const [currency, setCurrency] = useCurrency();

  const { t } = useTranslation('translation', { keyPrefix: 'currencies' });

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'AED' : 'USD');
  };

  const aed = `${t('aed.name')}`;
  const usd = `${t('usd.name')}`;

  return (
    <TextButton fontSize={18} textVariant="title" onPress={toggleCurrency}>
      {currency === 'AED' ? aed : usd}
    </TextButton>
  );
}

export default CurrencyToggler;
