import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

// import React from 'react';
// import { Flex, Layout } from 'antd';
// import ProjectDetails from './projectDetails';

// const { Header, Footer, Sider, Content } = Layout;

// const headerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 48,
//   lineHeight: '64px',
//   background: 'transparent',
// };

// const contentStyle: React.CSSProperties = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
// };

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   background: 'transparent',
// };

// const footerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   background: 'transparent',
// };

// const layoutStyle = {
// };

// const App: React.FC = () => (
//     <Flex gap="middle" wrap>
//         {/* <Layout style={layoutStyle}>
//             <Header style={headerStyle}>Header</Header>
//             <Content style={contentStyle}>Content</Content>
//             <Footer style={footerStyle}>Footer</Footer>
//         </Layout> */}

//         <Layout style={layoutStyle}>
//           <Header style={headerStyle}>Header</Header>
//           <Layout>
//             <Sider width="25%" style={siderStyle}>
//               Sider
//             </Sider>
//             <Content style={contentStyle}><ProjectDetails /></Content>
//           </Layout>
//           <Footer style={footerStyle}>Footer</Footer>
//         </Layout>

//     </Flex>
// );

// export default App;