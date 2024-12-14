import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useMemo } from "react";

export interface HorizontalSliderChartData {
	title: string;
	value: number;
	colour: string;
}

interface HorizontalSliderChartProps {
	data: HorizontalSliderChartData;
	total: number;
}

export const HorizontalSliderChart = (props: HorizontalSliderChartProps) => {
	const { data, total } = props;
	const percentage = useMemo(
		() => (100 * data.value) / total,
		[total, data.value]
	);

	return (
		<Stack mb={"10px"}>
			<Typography fontSize="16px" fontWeight={500}>
				{data.title}
			</Typography>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<LinearProgress
					variant="determinate"
					value={percentage}
					sx={{
						width: "calc(100% - 30px)",
						height: "15px",
						borderRadius: "10px",
						backgroundColor: "#f5f5f5",
						"& .MuiLinearProgress-bar": {
							backgroundColor: data.colour,
						},
					}}
				/>
				<Typography fontSize="16px" fontWeight={700}>
					{data.value}
				</Typography>
			</Stack>
		</Stack>
	);
};
