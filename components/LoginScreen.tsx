import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types/types";

// Define the prop types for LoginScreen
type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"Login"
>;

type Props = {
	navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
	const handleLogin = () => {
		navigation.navigate("ClientDashboard");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" secureTextEntry />
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f9f9f9",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 50,
		paddingHorizontal: 10,
		marginVertical: 10,
		backgroundColor: "#fff",
		borderRadius: 8,
		borderColor: "#ddd",
		borderWidth: 1,
	},
	button: {
		width: "80%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4CAF50",
		borderRadius: 8,
		marginTop: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
	},
});

export default LoginScreen;
