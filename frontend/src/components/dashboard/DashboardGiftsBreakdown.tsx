import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { HorizontalSliderChart } from "../charts/HorizontalSliderChart";

export const DashboardGiftsBreakdown = () => {
	const theme = useTheme();

	return (
		<Paper sx={{ padding: theme.spacing(2), height: "100%" }}>
			<Typography variant="h2">Gift Breakdown</Typography>
			<Box width="100%" mt="15px">
				<HorizontalSliderChart
					data={{
						title: "Unclaimed",
						value: 40,
						colour: theme.palette.primary.main,
					}}
					total={50}
				/>
				<HorizontalSliderChart
					data={{
						title: "Claimed",
						value: 10,
						colour: theme.palette.secondary.main,
					}}
					total={50}
				/>
			</Box>
			<Button href="/gifts/add" sx={{ marginTop: "15px" }}>
				Add New Gift Suggestions
			</Button>
		</Paper>
	);
};
