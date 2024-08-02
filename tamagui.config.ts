import { config } from './styles/config';

export const tamaguiConfig = config;

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
