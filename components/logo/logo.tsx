import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
import useTheme from '@/hooks/useTheme';

export const LogoSvg = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg
      viewBox="0 0 236.4 32.7"
      width={150}
      height={40}
      fill={theme.colors.highlight}
      style={styles.logo}
      {...props}>
      <Path d="M35.9 31.9V18.7c0-4.5-2.3-7.2-6.2-7.2-3.3 0-6.6 2.5-6.6 7.4v12.9h-2.6V18.6c0-4.4-2.4-7.1-6.1-7.1s-6.8 3.3-6.8 7.6v12.8H5V9.6h2.6v3.3c1.5-2.4 4.2-3.9 7-3.8 3.1-.1 6 1.7 7.3 4.5 1.6-2.8 4.6-4.5 7.8-4.5 5.2 0 8.6 3.6 8.6 9.3v13.4l-2.4.1z" />
      <Path d="M29.9 9.4c5.1 0 8.4 3.6 8.4 9.1v13.2h-2.1v-13c0-4.7-2.4-7.4-6.4-7.4-3.6 0-6.9 2.8-6.9 7.7v12.7h-2.1V18.6c0-4.5-2.5-7.3-6.3-7.3s-7 3.4-7 7.8v12.5H5.3V9.9h2.1v3.9c1.4-2.3 3.4-4.4 7.2-4.4 3.2-.1 6 1.8 7.3 4.7 1.5-2.9 4.6-4.7 8-4.7m0-.5c-3.2-.1-6.1 1.5-7.8 4.2-1.5-2.6-4.4-4.3-7.4-4.2-2.7-.1-5.2 1.2-6.8 3.3V9.4H4.8v22.7h3.1v-13c0-4.1 2.8-7.3 6.5-7.3s5.9 2.6 5.9 6.8v13.6h3.1V18.9c0-4.9 3.3-7.2 6.4-7.2 3.8 0 6 2.5 6 7v13.4h3.1V18.5c-.2-5.8-3.7-9.6-9-9.6zm21.2 23.5c-5.5 0-9-3.6-9-9.2V9.6h2.6v13.2c0 4.5 2.5 7.2 6.7 7.2 4 0 7.3-3.2 7.3-7.2V9.6h2.6v22.2h-2.6v-3.4c-1.7 2.6-4.6 4.1-7.6 4z" />
      <Path d="M61 9.9v21.7h-2.1v-4c-1.5 2.9-4.5 4.7-7.8 4.6-5.5 0-8.7-3.8-8.7-9V9.9h2.1v12.9c0 4.5 2.5 7.4 6.9 7.4 4.1 0 7.5-3.3 7.5-7.4V9.9H61m.5-.5h-3.1v13c.2 3.9-2.8 7.1-6.7 7.3h-.4c-4 0-6.4-2.6-6.4-7V9.4h-3.1v13.8c0 5.7 3.7 9.5 9.2 9.5 2.9.1 5.6-1.2 7.3-3.5v2.9h3.1l.1-22.7zm35.4 22.5V18.7c0-4.5-2.3-7.2-6.2-7.2-3.3 0-6.6 2.5-6.6 7.4v12.9h-2.5V18.6c0-4.4-2.4-7.1-6.1-7.1s-6.7 3.3-6.7 7.6v12.8h-2.6V9.6h2.6v3.3c1.5-2.4 4.2-3.9 7-3.8 3.1-.1 6 1.7 7.3 4.5 1.6-2.8 4.6-4.5 7.8-4.5 5.2 0 8.6 3.6 8.6 9.3v13.4l-2.6.1z" />
      <Path d="M90.9 9.4c5.1 0 8.4 3.6 8.4 9.1v13.2h-2.1v-13c0-4.7-2.4-7.4-6.4-7.4-3.6 0-6.9 2.8-6.9 7.7v12.7h-2.1V18.6c0-4.5-2.5-7.3-6.3-7.3s-7 3.4-7 7.8v12.5h-2.1V9.9h2.1v3.9c1.4-2.3 3.4-4.4 7.2-4.4 3.2-.1 6 1.8 7.3 4.7 1.5-2.9 4.6-4.7 7.9-4.7m0-.5c-3.2-.1-6.1 1.5-7.8 4.2-2.5-4.1-7.8-5.4-11.9-3-.9.5-1.7 1.2-2.3 2.1V9.4h-3.1v22.7h3.1v-13c0-4.1 2.8-7.3 6.5-7.3s5.9 2.6 5.9 6.8v13.6h3.1V18.9c0-4.9 3.3-7.2 6.4-7.2 3.8 0 6 2.5 6 7v13.4h3.1V18.5c-.2-5.8-3.6-9.6-9-9.6zm11.1 23v-1.6L117.4 12h-14.8V9.6h18.7v1.6l-15.4 18.3h15.4v2.4H102z" />
      <Path d="M121.1 9.9v1.2l-15.7 18.7h15.7v1.9h-18.8v-1.3L118 11.7h-15.1V9.8h18.2m.5-.4h-19.2v2.9H117l-15 17.9-.1.1v1.9h19.8v-2.9h-15.2l15-17.9.1-.1V9.4zM145.9 32l-6.3-18.1-6.3 18.1h-2.2L123 9.6h2.9l6.4 18.7 6.4-18.8h2l6.4 18.8 6.4-18.7h2.8L148.2 32h-2.3z" />
      <Path d="m140.5 9.8 6.6 19.2 6.6-19.1h2.3l-8 21.9h-1.9l-6.5-18.6-6.5 18.6h-1.8l-8-21.9h2.4l6.6 19.1 6.6-19.2h1.6m.4-.5h-2.3l-.1.3-6.1 17.9-6.1-17.8-.1-.3h-3.4l.2.6 8 21.9.1.3h2.4l.1-.3 6.1-17.3 6 17.3.1.3h2.5l.1-.3 8-21.9.2-.6h-3.3l-.1.3-6.1 17.8L141 9.6l-.1-.3zM170.6 32.2c-5.2 0-9.8-2.4-12-6.3-3.2-5.7 0-12.9 4.9-15.9.2-.1.5-.2.8-.2.5 0 1 .1 1.1.5 0 .3-.2.7-.5.8-4.7 2.8-6.6 9.4-4.2 13.8 1.9 3.4 6 5.6 10.4 5.6 1.3 0 2.5-.2 3.7-.6 5.2-1.8 7.9-7.2 6.6-13.2-.2-1.1-.6-2.2-1.2-3.1-1.3.1-2.5.2-3.6.2-1.2 0-2.5-.1-3.7-.3-1.5-.3-4.2-1.5-5.1-3.3-.4-.8-.4-1.7 0-2.4.9-1.5 2.6-2.4 4.4-2.3 1 0 2.1.2 3 .6 2.7 1.3 5 3.1 6.7 5.5.6-.1 1.2-.2 1.6-.3h.4c.5-.1.9.2 1 .7 0 .5-.4.9-.9.9-.4.1-.8.1-1.2.2.1.3.3.6.4.9 2.6 6.9-.3 14.2-6.8 16.9-1.8.9-3.8 1.4-5.8 1.3zm1.6-24.8c-.7-.1-1.4.2-1.8.8-.2.4-.2.9 0 1.3.9 1.9 3.1 2.9 6.5 2.9.8 0 1.7 0 2.5-.1-.6-.8-1.3-1.5-2.1-2.2-1.3-1.3-3-2.3-4.8-2.6-.1-.1-.2-.1-.3-.1z" />
      <Path d="M174.1 19.8c-.8 0-1.2-.5-1.2-1.3s.5-1.2 1.3-1.2c.7 0 1.2.6 1.2 1.3s-.6 1.2-1.3 1.2zm-5.9 0c-.3 0-.7-.1-.9-.4-.2-.3-.3-.6-.3-1 0-.8.5-1.2 1.3-1.2.7 0 1.2.5 1.2 1.2v.1c0 .7-.6 1.3-1.3 1.3z" />
      <Path d="M168.3 17.5c.6 0 1 .4 1 1v.1c0 .6-.5 1.1-1.1 1.1-.6 0-1-.4-1-1v-.1c.1-.8.4-1.1 1.1-1.1m5.9 0c.6 0 1 .4 1 1v.1c0 .5-.5 1-1 1-.6 0-1-.4-1-1v-.1c-.1-.6.4-1 1-1m-5.9-.5c-.7-.1-1.4.4-1.5 1.2v.2c0 .4.1.9.4 1.2.3.3.7.5 1.1.5.8 0 1.5-.6 1.5-1.4v-.1c.1-.8-.5-1.5-1.3-1.6h-.2zm5.9 0c-.8 0-1.5.6-1.5 1.3v.2c-.1.7.4 1.4 1.2 1.5H174.2c.8-.1 1.4-.7 1.5-1.4 0-.8-.7-1.5-1.5-1.6zm-2.7 10.1h-.7c-4.4 0-7.3-3.7-8.3-5.3-.2-.4-.1-.8.2-1.1.1 0 .3-.1.4-.1.3 0 .6.1.7.4.7 1.1 3.2 4.5 7 4.5h.5c1.2 0 4.3-.5 6.6-4.8.1-.3.4-.4.7-.4.1 0 .3 0 .4.1.2.1.3.2.4.4v.6c-2.5 5.2-6.4 5.7-7.9 5.7z" />
      <Path d="M178.7 20.5h.3c.3.1.4.4.3.7 0 0 0 .1-.1.1-2.5 5-6.3 5.5-7.8 5.5h-.6c-5.1 0-8.1-5-8.2-5.2-.1-.3 0-.6.2-.8h.3c.2 0 .4.1.5.2 0 0 2.8 4.7 7.2 4.7h.6c1.2 0 4.5-.5 6.8-4.9.2-.2.3-.3.5-.3m0-.5c-.4 0-.8.2-.9.6-2.2 4.2-5.2 4.6-6.3 4.6h-.5c-3.6 0-6.1-3.4-6.8-4.4-.2-.3-.5-.5-.9-.5-.2 0-.3 0-.5.1-.5.3-.6.9-.4 1.4 1.1 1.6 3.9 5.3 8.5 5.4h.7c1.6 0 5.6-.6 8.2-5.8.2-.5.1-1.1-.4-1.4h-.7zM189.5 31.9V9.6h2.5V15c1.7-3.5 5.2-5.7 9.1-5.8h.5V12h-.4c-4.6 0-9.2 3.3-9.2 10.7v9.2h-2.5z" />
      <Path d="M201.1 9.5h.3v2.3h-.2c-5 0-9.4 3.8-9.4 10.9v8.9h-2.1V9.9h2.1v6.2c1.7-3.8 5.1-6.6 9.3-6.6m0-.4c-3.6 0-7 2-8.8 5.1V9.4h-3v22.8h3.1v-9.4c0-7.2 4.5-10.4 8.9-10.4h.7V9.1h-.9zm3.3-8.9h2.6v31.6h-2.6V.2z" />
      <Path d="M206.7.5v31.1h-2.1V.5h2.1m.5-.5h-3.1v32.1h3.1V0zM220 32.3c-5.3 0-10.7-4.3-10.7-11.5v-.1c0-7.2 5.5-11.6 10.8-11.6 3.5 0 6.8 1.8 8.7 4.7V.2h2.6v31.6h-2.6v-4.3c-1.9 3-5.2 4.9-8.8 4.8zm.3-20.8c-4.9 0-8.3 3.6-8.3 9.1v.1c0 5.2 3.6 9.1 8.3 9.1h.1c2.2 0 4.3-.9 5.9-2.5 1.7-1.8 2.7-4.1 2.6-6.6v-.1c.1-4.9-3.7-8.9-8.6-9.1z" />
      <Path d="M231.2.5v31.1h-2.1v-4.8c-1.9 2.9-4.7 5.4-9 5.4h-.1c-5.2 0-10.5-4.2-10.5-11.3v-.1c0-7.1 5.3-11.4 10.6-11.4 4.4 0 7.2 2.5 9 5.2V.5h2.1m-10.8 29.6c5-.1 8.9-4.3 8.8-9.3v-.1c.1-5.1-3.8-9.3-8.9-9.4-4.8 0-8.5 3.5-8.5 9.3v.1c0 5.7 4 9.4 8.6 9.4M231.7 0h-3.1v13.1c-2-2.7-5.2-4.2-8.5-4.2-5.4 0-11 4.4-11 11.9v.1c0 7.3 5.6 11.8 10.9 11.8h.1c3.4 0 6.5-1.6 8.5-4.4v3.9h3.1V0zm-11.3 29.6c-4.7 0-8.2-3.8-8.2-8.9v-.1c0-5.3 3.3-8.8 8.1-8.8 4.8.2 8.5 4.1 8.4 8.9v.1c.1 4.7-3.6 8.6-8.3 8.8z" />
    </Svg>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: -6,
  },
});
export default LogoSvg;
