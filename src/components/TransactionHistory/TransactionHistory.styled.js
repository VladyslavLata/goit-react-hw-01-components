import styled from "@emotion/styled";


export const Table = styled.table`
box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.46);
`

export const TableHeader = styled.thead`
background-color: ${p => p.theme.colors.accent};
height: 50px;
`

export const TableCell = styled.th`
width: 250px;
`
export const TableLine = styled.tr`
text-align: center;
height: 50px;
background-color: ${p => p.theme.colors.bgWhite};

&:nth-of-type(even) {
background-color:  ${p => p.theme.colors.bgGray};
}
`