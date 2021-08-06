import styled from 'styled-components';
import { Link } from 'react-router-dom';

//  <div className="header">
//    <Link className="logo-container" to="/">
//      <Logo className="logo" />
//    </Link>
//    <div className="options">
//      <Link className="option" to="/shop">
//        SHOP
//      </Link>

// // we can reuse a css defined like below.
// const OptionContinerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// div with Link component, call styled(Link) insted of styled.div
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContiner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// with Link    : <OptionLink
// without Link : <OptionLink as="div"
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// // without Link
// export const OptionDiv = styled.div`
//   ${OptionContinerStyles}
// `;
