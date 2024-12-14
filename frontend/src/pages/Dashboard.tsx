import { Box, Typography } from "@mui/material";
import {
	DashboardGridStat,
	DashboardGridStatProps,
} from "../components/dashboard/DashboardGridStat";
import Grid from "@mui/material/Grid2";

import AvTimerIcon from "@mui/icons-material/AvTimer";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { DashboardChecklist } from "../components/dashboard/DashboardChecklist";
import { DashboardGuestBreakdown } from "../components/dashboard/DashboardGuestBreakdown";
import { DashboardGiftsBreakdown } from "../components/dashboard/DashboardGiftsBreakdown";

const dashboardStats: DashboardGridStatProps[] = [
	{ value: 351, title: "Days to Go", icon: <AvTimerIcon /> },
	{ value: 56, title: "Total Guests", icon: <GroupIcon /> },
	{ value: 4, title: "Awaiting RSVPs", icon: <HourglassTopIcon /> },
	{ value: 46, title: "Attending Guests", icon: <GroupAddIcon /> },
	{ value: 6, title: "Declined Invitations", icon: <PersonOffIcon /> },
];

export const Dashboard = () => {
	return (
		<Box m="20px">
			<Typography variant="h1">Dashboard</Typography>
			<Grid container spacing={2} mt={2}>
				{dashboardStats.map((ds: DashboardGridStatProps) => (
					<Grid size={12 / dashboardStats.length}>
						<DashboardGridStat
							value={ds.value}
							title={ds.title}
							link={ds.link}
							icon={ds.icon}
						/>
					</Grid>
				))}
			</Grid>
			<Grid container spacing={2} mt={2}>
				<Grid size={4}>
					<DashboardGuestBreakdown />
				</Grid>
				<Grid size={4}>
					<DashboardChecklist />
				</Grid>
				<Grid size={4}>
					<DashboardGiftsBreakdown />
				</Grid>
			</Grid>
		</Box>
	);
};
