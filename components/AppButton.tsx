import { Text, TouchableOpacity } from "react-native";

type AppButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-suface rounded-full min-h-[62px] items-center justify-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`font-RoboBold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
