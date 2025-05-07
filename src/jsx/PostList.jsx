import styled from "styled-components";
import PostItem from "./PostItem";

const StyledWrapper = styled.div`
    display: grid;
    gap: 20px;
`

function PostList(props){
    const {posts, itemClicked} = props

    const list = posts.map((post, index)=>{
        return <PostItem key={post.id} post={post} onClick={(e)=>itemClicked(post)}></PostItem>
    })

    return(
        <StyledWrapper>
            {list}
        </StyledWrapper>
    )
}

export default PostList