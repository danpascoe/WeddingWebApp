import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import { useCallback } from "react";

interface LinkButtonProps {
	link: string;
	text: string;
	sx: SxProps;
}

export const LinkButton = (props: LinkButtonProps) => {
	const { link, text, sx } = props;

	const onClick = useCallback(() => {
		window.location.href = link;
	}, [link]);

	return (
		<Button onClick={onClick} sx={sx}>
			{text}
		</Button>
	);
};
//{ marginTop: "20px" }
