import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import sytles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={sytles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />

      <div className={sytles.commentBox}>
        <div className={sytles.commentContent}>
          <header>
            <div className={sytles.authorAndTime}>
              <strong>Davi Pessoa</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-11-09 16:49:21">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
          
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}