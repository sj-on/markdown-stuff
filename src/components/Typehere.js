import React, {useState} from 'react';
import Markdown from "marked-react";
import DOMPurify from 'dompurify';

function Typehere() {
console.log('i am a flipping piece of trash.');
  const [questionMark, setQuestionMark] = useState('');
    
  return(
    <div id="main">
      <div id="textarea-mama">
      <textarea value={questionMark} name="markdowninput" id="editor" placeholder="type some shiz so i can spill out some more" onChange={(e)=>setQuestionMark(e.target.value)} />
      </div>
      <div id="iamshit">
      <div id="preview">
        <Markdown openLinksInNewTab={true} gfm ={true} breaks = {true}>{DOMPurify.sanitize(questionMark)}</Markdown>
      </div>
      </div>
    </div>
  );
}


export default Typehere;