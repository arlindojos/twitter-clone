import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px ;

        max-height: 100vh;
        overflow: auto;
    }
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
    > i {
        font-size: 32px;
        color: var(--twitter);
        margin-bottom: 20px;
    }
`;

export const MenuButton = styled.button`
    display: flex; 
    align-items: center;
    flex-shrink: 0;

    padding: 8.25px 0 8.25px 12px;
    outline: 0;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover, &:active {
        > span, i {
            color: var(--twitter);
        }
    }

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }

        padding-right: 15px;
    }

    > i {
        flex-shrink: 0;

        font-size: 24px;
        color: var(--white);
    }

    & + button {
        margin-top: 16px;
    }

    & + button:last-child {
        margin-top: 33px;

        width: 40px; 
        height: 40px;

        > span {
            display: none;
        }

        @media (min-width: 1280px) {
            width: 100%; 
            height: unset;

            > span {
                display: inline;
            }
        }
    }
`;


export const BotSide = styled.div`
    margin-top: 20px;
    
    display: flex;
    align-items: center;

    > i {
        display: none;

        @media (min-width: 1280px) {
            display: inline-block;
            font-size: 16px;

            color: var(--white);
            margin-left: 30px;
            cursor: pointer;

            &:hover {
                color: var(--like);
            }
        }
    }
`;

export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    flex-shrink: 0;
    border-radius: 50%;
    background: var(--gray);
`; 

export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;

        margin-left: 10px;
        font-size: 14px;

        > span {
            color: var(--gray);
        }
    }
`; 