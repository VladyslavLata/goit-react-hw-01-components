import styled from '@emotion/styled';

export const Avatar = styled.img`
width: 50px;
height: auto;
`;

export const OnlineIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.data === 'true' ? p.theme.colors.green : p.theme.colors.red};
`;

export const Name = styled.p`
font-size: ${p=>p.theme.fontSizes.l};
`