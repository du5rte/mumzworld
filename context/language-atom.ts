import { Language } from '@/types/languages';
import { atomWithAsyncStorage } from './jotai';

export const languageAtom = atomWithAsyncStorage<Language>('language', 'en');
