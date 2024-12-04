import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

interface SideMenuItemProps {
	title: string;
	icon: React.ReactNode;
	link: string;
}

export const SideMenuItem = (props: SideMenuItemProps) => {
	const { title, icon, link } = props;

	const location = useLocation();
	const active: boolean = useMemo(
		() => location.pathname === link,
		[link, location.pathname]
	);

	return (
		<MenuItem active={active} component={<Link to={link} />} icon={icon}>
			<Typography>{title}</Typography>
		</MenuItem>
	);
};
