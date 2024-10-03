import { Image, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ClientDashboard from "@/components/ClientDashboard";
import { RootStackParamList } from "../types/types";
import LoginScreen from "@/components/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ClientDashboard"
					component={ClientDashboard}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

/*
Stack Builder change on Oct 1, 24
Commented from Login Screen Component till 'const styles = StyleSheet.create({'
*/
// Login Screen Component
// const LoginScreen: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.title}>Login</Text>
// 			<TextInput placeholder="Email" style={styles.input} />
// 			<TextInput placeholder="Password" secureTextEntry style={styles.input} />
// 			<Button
// 				title="Login"
// 				onPress={() => console.log("Login button pressed")}
// 			/>
// 			<TouchableOpacity onPress={onSwitch}>
// 				<Text style={styles.link}>Go to Signup</Text>
// 			</TouchableOpacity>

// 			{/* Custom Facebook Login Button */}
// 			<TouchableOpacity
// 				style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
// 				onPress={() => console.log("Facebook Login")}
// 			>
// 				<Text style={styles.socialButtonText}>Login with Facebook</Text>
// 			</TouchableOpacity>

// 			{/* Custom Social Login Button (Example) */}
// 			<TouchableOpacity
// 				style={[styles.socialButton, { backgroundColor: "#4C69BA" }]}
// 				onPress={() => console.log("Custom Provider Login")}
// 			>
// 				<Text style={styles.socialButtonText}>Login with Custom Provider</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// // Signup Screen Component
// const SignupScreen: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.title}>Signup</Text>
// 			<TextInput placeholder="Name" style={styles.input} />
// 			<TextInput placeholder="Email" style={styles.input} />
// 			<TextInput placeholder="Password" secureTextEntry style={styles.input} />
// 			<Button
// 				title="Signup"
// 				onPress={() => console.log("Signup button pressed")}
// 			/>
// 			<TouchableOpacity onPress={onSwitch}>
// 				<Text style={styles.link}>Go to Login</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// // Main App Component
// const App: React.FC = () => {
// 	const [showLogin, setShowLogin] = useState(true);

// 	return (
// 		<View style={styles.container}>
// 			{showLogin ? (
// 				<LoginScreen onSwitch={() => setShowLogin(false)} />
// 			) : (
// 				<SignupScreen onSwitch={() => setShowLogin(true)} />
// 			)}
// 		</View>
// 	);
// };

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
		padding: 16,
	},
	message: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	link: {
		color: "blue",
		marginTop: 15,
		fontSize: 16,
		textDecorationLine: "underline",
	},
	socialButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 20,
	},
	socialButtonText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
	},
});

// export default App;
