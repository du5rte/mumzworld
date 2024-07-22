import React from 'react';
import { useTranslation } from 'react-i18next';
import useCurrency from '@/hooks/useCurrency';
import Button from '../button';

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
    <Button
      variant="text"
      size="xl"
      title={currency === 'AED' ? aed : usd}
      onPress={toggleCurrency}
    />
  );
}

export default CurrencyToggler;
