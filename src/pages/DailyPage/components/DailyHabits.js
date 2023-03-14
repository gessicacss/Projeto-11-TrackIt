import styled from "styled-components"

export default function DailyHabits(){
    return (
        <ContainerHabits>
            <LeftSide>
                <h4>Ler 1 capítulo de livro</h4>
                <p>Sequência atual: <span>4 dias</span></p>
                <p>Seu recorde: <span>4 dias</span></p>
            </LeftSide>
            <RightSide>
                OK
            </RightSide>

        </ContainerHabits>
    )
}

const ContainerHabits = styled.div`
    width:100%;
    height:94px;
    background-color:#fff;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
`

const LeftSide = styled.div`
    h4 {
        font-size:20px;
        color: #666;
        line-height:25px;
        margin-bottom:5px;
    }
    p {
        font-size:13px;
        line-height:16px;
    }
`

const RightSide = styled.div`
    width:69px;
    height:69px;
    background-color: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: center;
`