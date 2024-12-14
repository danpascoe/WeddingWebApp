import { Box, Paper, Typography, useTheme } from "@mui/material";

import {
	HorizontalSliderChart,
	HorizontalSliderChartData,
} from "../charts/HorizontalSliderChart";

export const DashboardGuestBreakdown = () => {
	const theme = useTheme();

	const data: HorizontalSliderChartData[] = [
		{ title: "Awaiting invite", value: 1, colour: theme.palette.primary.main },
		{ title: "Pending RSVP", value: 3, colour: theme.palette.secondary.main },
		{ title: "Awaiting Meal Selection", value: 12, colour: "#FCDC4D" },
		{ title: "Completed", value: 34, colour: "#49A078" },
		{ title: "Declined", value: 6, colour: "#D5573B" },
	];

	return (
		<Paper sx={{ padding: theme.spacing(2), height: "100%" }}>
			<Typography variant="h2">Guest Breakdown</Typography>
			<Box width="100%" mt="15px">
				{data.map((d, index) => (
					<HorizontalSliderChart key={index} data={d} total={56} />
				))}
			</Box>
		</Paper>
	);
};
