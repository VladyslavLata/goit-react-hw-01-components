import styled from "@emotion/styled";

export const StatTitle = styled.h2`
text-align: center;
padding-top: ${p => p.theme.space[5]}px;
padding-bottom: ${p => p.theme.space[5]}px;
font-size: ${p => p.theme.fontSizes.l};
color: ${p=>p.theme.colors.text};
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
color: ${p=> p.theme.colors.white};
`

export const StatText = styled.span`
font-size: ${p => p.theme.fontSizes.m};

&:last-child {
  margin-top: ${p=>p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.l};
}
`