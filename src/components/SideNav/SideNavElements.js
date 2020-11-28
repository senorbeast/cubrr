import styled from "styled-components";

export const SideNavContainer = styled.div`
    width:5rem;
    height:100vh;
    position:fixed;
    background-color:${(props) => props.theme.primary};

`;

export const SideNavMenu = styled.div`
    list-style:none;
    padding:0;
    margin: 0;
    display:flex;
    flex-direction:column;
    align-items:center;
     &:last-child{
        margin-bottom: auto; //makes the big as possible adnd push it down to bottom 
    }
   
`;

export const SideNavItem = styled.div`
    background-color:${(props) => props.theme.prialt};
    height: 3rem;
    width:3rem;
    border-radius:50%;
    display:flex;
    margin-top:0.4rem;
    margin-bottom:0.4rem;
    justify-content:center;
    align-items:center;

    color: ${(props) => props.theme.priopp};
    
      &:hover {
        color: ${(props) => props.theme.highlight};
        filter:brightness(1.2);
        transition: 0.2s ease-in-out;
    }
`;

// export const SideNavContainer = styled.div`
    
// `;
