import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const ClientDashboard = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
			{/* Header */}
			<Header>
				<ProfileSection>
					<ProfilePic source={{ uri: "https://via.placeholder.com/50" }} />
					<GreetingText>Welcome, [Client Name]!</GreetingText>
				</ProfileSection>
				<TouchableOpacity>
					<Icon name="notifications-outline" size={28} color="#333" />
				</TouchableOpacity>
			</Header>

			<ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
				{/* Action Cards */}
				<ActionCard>
					<CardIcon>
						<Icon name="document-text-outline" size={32} color="#4CAF50" />
					</CardIcon>
					<CardText>
						<ActionTitle>Request a Notary Service</ActionTitle>
						<ActionSubtitle>
							Submit your documents for notarization.
						</ActionSubtitle>
					</CardText>
				</ActionCard>

				<ActionCard>
					<CardIcon>
						<Icon name="folder-open-outline" size={32} color="#FF9800" />
					</CardIcon>
					<CardText>
						<ActionTitle>View Documents</ActionTitle>
						<ActionSubtitle>Access all your uploaded files.</ActionSubtitle>
					</CardText>
				</ActionCard>

				<ActionCard>
					<CardIcon>
						<Icon name="briefcase-outline" size={32} color="#2196F3" />
					</CardIcon>
					<CardText>
						<ActionTitle>Track Case Progress</ActionTitle>
						<ActionSubtitle>Check the status of your cases.</ActionSubtitle>
					</CardText>
				</ActionCard>

				{/* Recent Activity */}
				<SectionTitle>Recent Activity</SectionTitle>
				<RecentActivityCard>
					<ActivityText>Document Signed</ActivityText>
					<ActivityTime>2 hours ago</ActivityTime>
				</RecentActivityCard>
				<RecentActivityCard>
					<ActivityText>Notary Service Requested</ActivityText>
					<ActivityTime>1 day ago</ActivityTime>
				</RecentActivityCard>
			</ScrollView>

			{/* Bottom Navigation Placeholder */}
			<BottomNavigation>
				<NavItem>
					<Icon name="home-outline" size={28} color="#333" />
				</NavItem>
				<NavItem>
					<Icon name="folder-outline" size={28} color="#333" />
				</NavItem>
				<NavItem>
					<Icon name="chatbubble-outline" size={28} color="#333" />
				</NavItem>
				<NavItem>
					<Icon name="settings-outline" size={28} color="#333" />
				</NavItem>
			</BottomNavigation>

			{/* Floating Action Button */}
			<FloatingActionButton>
				<Icon name="add" size={28} color="#fff" />
			</FloatingActionButton>
		</SafeAreaView>
	);
};

export default ClientDashboard;

// Styled components for layout and styling
const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	elevation: 3;
`;

const ProfileSection = styled.View`
	flex-direction: row;
	align-items: center;
`;

const ProfilePic = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	margin-right: 10px;
`;

const GreetingText = styled.Text`
	font-size: 18px;
	color: #333;
	font-weight: bold;
`;

const ActionCard = styled.TouchableOpacity`
	background-color: #ffffff;
	flex-direction: row;
	align-items: center;
	padding: 20px;
	margin-vertical: 10px;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	elevation: 3;
`;

const CardIcon = styled.View`
	margin-right: 15px;
`;

const CardText = styled.View`
	flex: 1;
`;

const ActionTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #333;
`;

const ActionSubtitle = styled.Text`
	font-size: 14px;
	color: #777;
`;

const SectionTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-top: 20px;
	color: #333;
`;

const RecentActivityCard = styled.View`
	background-color: #ffffff;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;
	margin-top: 10px;
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	elevation: 2;
`;

const ActivityText = styled.Text`
	font-size: 16px;
	color: #333;
`;

const ActivityTime = styled.Text`
	font-size: 14px;
	color: #777;
`;

const BottomNavigation = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #fff;
	padding: 10px;
	box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
	elevation: 3;
`;

const NavItem = styled.TouchableOpacity`
	padding: 10px;
`;

const FloatingActionButton = styled.TouchableOpacity`
	position: absolute;
	bottom: 80px;
	right: 20px;
	width: 60px;
	height: 60px;
	border-radius: 30px;
	background-color: #4caf50;
	justify-content: center;
	align-items: center;
	elevation: 5;
`;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ClientDashboard = () => {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.title}>Client Dashboard</Text>
// 			{/* Add your dashboard content here */}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		backgroundColor: "#f9f9f9",
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 	},
// });

// export default ClientDashboard;
