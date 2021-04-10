import styled from 'styled-components';

const StyledHeader = styled.div`
    font-size: 24px;
    padding: 10px;
    text-align: center;
`;

const Header = ({...props}) => {
    const { title } = props;
    
    return <StyledHeader>{title}</StyledHeader>;
}

export default Header;