import { Text, Pressable } from "react-native";

type ButtonProps = {
  color?: string;
  text: string;
  style?: string;
  textStyle?: string;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable>
      <Text>{text}</Text>
    </Pressable>
  );
};
export default Button;
