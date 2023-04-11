import React from 'react'
import './comments.style.css';
import { comments_Data } from '../../Utills/Constants';
const Comments = ({name,text}) => {
  return (
    <div className='container'>
        <div>
          <img className='display-icon' alt='user' src="https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png" />
        </div>
        <div className='font-area'>
            <div className='name'>{name}</div>
            <div className='text'>{text}</div>
        </div>
    </div>
  )
}
const CommentsList=({comments})=>{
    return (
        
            <div >
                {comments.map((comment,i)=>(
                    <div key={i} className='parent'>
                        <Comments name={comment.name}
                    text={comment.text}/>
                    <div className='margin'>
                         <CommentsList comments={comment.Replies}/>
                     </div>
                    </div>
                ))}
            </div>
            
        
    )
}
const CommentContainer=()=>{
    return (
        <div className='parent-container'>
            <CommentsList comments={comments_Data}/>
        </div>
    )
}
export default CommentContainer;