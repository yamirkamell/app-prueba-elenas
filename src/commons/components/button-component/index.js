import { Button, ContainerComponent, StyledText } from './styled';

const ButtonComponent = (props) => {
  const { title, onClick } = props;

  return (
      <Button onPress={() => { onClick() }}>
        <StyledText>
          {title}
        </StyledText>
      </Button>
  )
};

export default ButtonComponent;