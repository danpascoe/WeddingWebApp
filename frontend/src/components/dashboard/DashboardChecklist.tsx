import {
	Link,
	List,
	ListItem,
	Paper,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";

interface Task {
	title: string;
	link: string;
	subtite?: string;
}

export const DashboardChecklist = () => {
	const theme = useTheme();

	const tasks: Task[] = [
		{
			title: "Add Guests",
			link: "/",
			subtite: "Tell us who you're sharing your big day with",
		},
		{
			title: "Add Meal Options",
			link: "/",
			subtite: "Collect your guests meal choices and diatary restrictions",
		},
		{
			title: "Add Itinerary",
			link: "/",
			subtite: "Let your guests know what you'll be doing throughout the day",
		},
		{
			title: "Add Gifts",
			link: "/",
			subtite:
				"Your guests will want to shower you with gifts. Let them know what you would like",
		},
		{
			title: "Send Invites",
			link: "/",
			subtite: "Send your guests the invitations",
		},
	];

	return (
		<Paper sx={{ padding: theme.spacing(2), height: "100%" }}>
			<Typography variant="h2">Task Checklist</Typography>
			<Typography>Here are some items that need your attention</Typography>
			<List>
				{tasks.map((task) => (
					<ListItem disableGutters>
						<Stack>
							<Link sx={{ fontSize: "18px", fontWeight: 700 }} href={task.link}>
								{task.title}
							</Link>
							<Typography>{task.subtite}</Typography>
						</Stack>
					</ListItem>
				))}
			</List>
		</Paper>
	);
};
