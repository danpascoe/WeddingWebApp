import { useCallback, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FlatwareIcon from "@mui/icons-material/Flatware";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RedeemIcon from "@mui/icons-material/Redeem";

import { SideMenuItem } from "./SideMenuItem";

interface MenuItem {
	title: string;
	link: string;
	icon: React.ReactNode;
}

export const SideMenu = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const theme = useTheme();

	const onCollapseCallback = useCallback(() => {
		setCollapsed(!collapsed);
	}, [collapsed]);

	const noHoverEffect = {
		".ps-menu-button": {
			"&:hover": { backgroundColor: "inherit !important" },
		},
	};

	const menuItems: MenuItem[] = [
		{ title: "Dashboard", link: "/", icon: <HomeIcon /> },
		{ title: "Guests", link: "/g", icon: <PersonIcon /> },
		{ title: "Meals", link: "/m", icon: <FlatwareIcon /> },
		{ title: "Itinerary", link: "/i", icon: <CalendarTodayIcon /> },
		{ title: "Gifts", link: "/gi", icon: <RedeemIcon /> },
		{ title: "Wedding", link: "/w", icon: <DiamondIcon /> },
	];

	return (
		<Sidebar collapsed={collapsed} backgroundColor="#fff">
			<Menu
				style={{ margin: "20px" }}
				menuItemStyles={{
					button: {
						borderRadius: "10px",
						height: "40px",
						marginBottom: "5px",
						paddingLeft: "10px",
						paddingRight: "10px",
						[`&.ps-active`]: {
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.common.white,
						},
					},
				}}
			>
				<MenuItem rootStyles={noHoverEffect} style={{ marginBottom: "20px" }}>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						{!collapsed ? <Typography variant="h3">Weddings</Typography> : null}
						<IconButton onClick={onCollapseCallback}>
							<MenuOutlinedIcon />
						</IconButton>
					</Box>
				</MenuItem>
				{menuItems.map((item) => (
					<SideMenuItem title={item.title} icon={item.icon} link={item.link} />
				))}
			</Menu>
		</Sidebar>
	);
};
