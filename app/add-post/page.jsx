'use client'

import Styles from '../page.module.css';
import { useState } from 'react';

export default function AddPost(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    };
    const handleContentChange = (e)=>{
        setContent(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed as a prop
        onSubmit({ title, content });
        // Reset the form inputs
        setTitle('');
        setContent('');
    };


    return(
        <main className={Styles.main}>
            <h1>Add Post</h1>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}