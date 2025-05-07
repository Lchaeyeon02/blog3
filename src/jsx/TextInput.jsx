import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: white;
    width: 1220px;
    height: ${props=>props.height}px;
    display: block;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    font-size: 24px;
    font-weight: bold;
    padding: 16px 40px;
    resize: none;
    color: #000;
    line-height: 40px
`

function TextInput(props){
    // height: 높이, value & onChange: 제어 컴포넌트용
    const {height, value, onChange} = props

    return (
        <StyledTextArea height={height || 75} value={value} onChange={onChange}></StyledTextArea>
    )
}

export default TextInput

