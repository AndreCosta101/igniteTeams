import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;


`;

export const Title = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `};

`;

export const SubTitle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};

`;