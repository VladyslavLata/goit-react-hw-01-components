import styled from '@emotion/styled';


export const UserPhoto = styled.img`
display: inline-block;
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.bgGray};
`

export const UserName = styled.h2`
margin-top: ${p => p.theme.space[4]}px;
`

export const UserInfo = styled.p`
margin-top: ${p => p.theme.space[3]}px;
color: ${p=>p.theme.colors.gray};
`

export const StatsItem = styled.li`
min-height: 90px;
width: calc(100% / 3);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${p=>p.theme.colors.gray};

&:not(:last-child) {
  border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.gray};  
}

& > span:last-child {
  margin-top: ${p=> p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  font-weight: ${p=>p.theme.fontWeights.bold};
}
`