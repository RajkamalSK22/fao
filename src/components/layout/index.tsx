'use client';
import { Layout } from 'antd';
import styled from 'styled-components';
import Logo from '@/components/svgIcons/Logo';
import WebHeaderNavs from './WebHeaderNavs';
import media from '@/constants/mediaQuery';

const ContentLayout = styled(Layout)`
	// marign: 0 auto;
  	background-color: #fff;
`;

const Header = styled(Layout.Header)`
	width: 100%;
	height: unset;
	top: 40px;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	background-color: transparent;
	border-bottom: 1px solid #EAECF0;
	padding: 16px 112px;

	${media.lessThan("md")`
		display: flex;
		justify-content: space-between;
	`}

	${media.lessThan("sm")`
		padding: 0px 20px;
	`}
`;

const PageContent = styled(Layout.Content)`
	background: #fff;
	flex: 1;
`;

const Hamburger = styled.div`
	display: none;

	${media.lessThan("md")`
		display: flex;
	`}
`;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ContentLayout>
			<Header>
                <Logo width='152px' height= '40px'/>
				<WebHeaderNavs />
			</Header>
			<PageContent>{children}</PageContent>
		</ContentLayout>
	);
};

export default DashboardLayout;