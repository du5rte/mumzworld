import { Currency } from '@/types/currencies';
import { atomWithAsyncStorage } from './jotai';

import { initialLanguage } from '@/locales/i18next';

export const initialCurrency = initialLanguage === 'ar' ? 'AED' : 'USD';

export const currencyAtom = atomWithAsyncStorage<Currency>('currency', initialCurrency);
