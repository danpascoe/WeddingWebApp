import { Box, Paper, Typography, useTheme } from "@mui/material";
import { ConditionalLink } from "../ConditionalLink";

export interface DashboardGridStatProps {
	value: number;
	title: string;
	icon?: React.ReactNode;
	link?: string;
}

export const DashboardGridStat = (props: DashboardGridStatProps) => {
	const { value, title, icon, link } = props;
	const theme = useTheme();

	return (
		<Paper sx={{ padding: theme.spacing(2), position: "relative" }}>
			{icon ? (
				<Box
					sx={{
						position: "absolute",
						top: theme.spacing(2.5),
						right: theme.spacing(2),
						color: theme.palette.primary.main,
						"& > svg": {
							width: "30px",
							height: "30px",
						},
					}}
				>
					{icon}
				</Box>
			) : null}
			<ConditionalLink href={link} condition={!!link}>
				<Typography
					variant="h1"
					sx={{
						fontWeight: "700",
						color: theme.palette.primary.main,
						fontSize: "50px",
					}}
				>
					{value}
				</Typography>
				<Typography variant="h4">{title}</Typography>
			</ConditionalLink>
		</Paper>
	);
};
