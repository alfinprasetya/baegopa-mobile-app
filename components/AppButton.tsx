import { Text, TouchableOpacity } from "react-native";

type AppButtonProps = {
  title: string;
  icon?: JSX.Element;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  icon,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-suface rounded-full min-h-[32px] flex-row items-center justify-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      {icon}
      <Text className={`ml-1 font-RoboBold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
