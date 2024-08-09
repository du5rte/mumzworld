import { fireEvent, render, screen } from '@/utils/tests/react-native';

import { TextButton } from './text-button';

jest.useFakeTimers();

describe('TextButton', () => {
  const text = 'Test TextButton';

  it('should render text', () => {
    render(<TextButton>{text}</TextButton>);
    expect(screen.getByText(text)).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    const text = 'Test TextButton';

    const onPressMock = jest.fn();

    render(<TextButton onPress={onPressMock}>{text}</TextButton>);

    fireEvent.press(screen.getByText(text));

    expect(onPressMock).toHaveBeenCalled();
  });
});
