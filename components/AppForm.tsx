import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, InputModeOptions } from "react-native";

type AppFormProps = {
  name: string;
  icon?: any;
  width: number;
  height: number;
  value: string;
  onChange: (text: string) => void;
  customStyle?: string;
  inputMode?: InputModeOptions;
  secureTextEntry?: boolean;
};

const AppForm: React.FC<AppFormProps> = ({
  name,
  icon,
  width,
  height,
  value,
  onChange,
  customStyle,
  inputMode,
  secureTextEntry,
}) => {
  return (
    <View
      style={{ width, height }}
      className={`bg-suface-100 rounded-full flex-row py-2 px-5 mb-2 justify-start items-center ${customStyle}`}
    >
      {icon && <FontAwesome name={icon} size={24} color="black" />}
      <TextInput
        className="ml-3 font-RoboRegular text-sm w-full h-full"
        onChangeText={onChange}
        value={value}
        placeholder={name}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default AppForm;
