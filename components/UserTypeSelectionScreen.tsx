import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // Ensure this path is correct

type UserTypeSelectionScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"UserTypeSelection"
>;

type Props = {
	navigation: UserTypeSelectionScreenNavigationProp;
};

const UserTypeSelectionScreen = ({ navigation }: Props) => {
	const handleSelection = (userType: "Client" | "Notary") => {
		navigation.navigate("Login", { userType });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Select User Type</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleSelection("Client")}
			>
				<Text style={styles.buttonText}>Client</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleSelection("Notary")}
			>
				<Text style={styles.buttonText}>Notary</Text>
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
		marginBottom: 30,
	},
	button: {
		width: "80%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4CAF50",
		borderRadius: 8,
		marginVertical: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
	},
});

export default UserTypeSelectionScreen;
