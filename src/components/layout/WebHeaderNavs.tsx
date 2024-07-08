import React from 'react';
import styled from 'styled-components';
import { NAV_LINKS } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import media from '@/constants/mediaQuery';

const Container = styled.div`
	height: 48px;
	margin:0 auto;
	width: fit-content;
	padding: 16px 32px;
	align-items: center;
	display: flex;
	gap: 40px;

	${media.lessThan("md")`
		display: none;
    `}
`;

const NavItem = styled(Link) <{ $isActive: boolean }>`
	height: 24px;
	display: flex;
	justify-content: center;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	color: #344054;
	border-radius: 6px;
;
	
	${({ $isActive }) => $isActive && `
		padding: 8px 12px;
		color: #6941C6;
		height: 40px;
		border-radius: 4px;
		background-color: #F9F5FF;
;
	`}

	&:hover {
		${({ $isActive }) => `color: ${$isActive ? '#6941C6' : '#6941C6' }`};
	}
	
	${media.lessThan("md")`
		flex-direction: column;
    `}
`;

const WebHeaderNavs = () => {
	const pathname = usePathname();

	return (
		<>
			<Container>
				{ NAV_LINKS.map(({ label, link }) => (
					<NavItem
						$isActive={ link === pathname }
						key={ link }
						href={ link }
					>
						{ label }
					</NavItem>
				)) }
			</Container>
			</>
	);
};

export default WebHeaderNavs;