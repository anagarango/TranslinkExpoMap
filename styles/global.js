import styled from 'styled-components'

export const Header = styled.div`
width:100vw;
height:fit-content;
background-color: white;
display:flex;
align-items:center;
justify-content:space-between;
position:absolute;
top:0;
left:0;
z-index:5;
box-shadow: 0px 3px 10px grey
`

export const Image = styled.img`
width:12vw;
padding:15px 20px;
`

export const H2 = styled.h2`
color:#004890;
padding: 0 20px 0 0;
margin:0
`

export const H3 = styled.h3`
color:#004890;
padding:0;
margin:0
`

export const H4 = styled.h4`
color:#004890;
padding:0;
margin:0
`

export const Box = styled.div`
width:43vw;
min-height:170px;
background-color: white;
display:flex;
justify-content:start;
align-items:center;
box-shadow: 0px 3px 10px grey;
padding:20px;
flex-direction:column;
margin:1vw
`

export const List = styled.li`
color:#004890;
padding-left:20px
`

export const Container = styled.div`
width: ${props=>props.width};
display:${props=>props.display};
justify-content:${props=>props.justCont};
padding:${props=>props.padding};
background-color:${props=>props.bgColor};
margin:${props=>props.margin};
flex-wrap${props=>props.flexWrap}
`