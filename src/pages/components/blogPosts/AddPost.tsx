import React, { useState } from 'react';
import { TextAreaBlog } from '../custom/TextAreaBlog';

const AddPost: React.FC = () => {
    const [postContent, setPostContent] = useState<string>('');

    const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    };

    const handlePostSubmit = () => {
        if (postContent.trim()) {
            alert(`Post enviado: ${postContent}`);
            setPostContent('');
        } else {
            alert('O post não pode estar vazio.');
        }
    };

    return (
        <div style={{ margin: '0 auto', padding: '20px', background: '#1E1E1E', color: '#FFFFFF', borderRadius: '8px' }}>
            
            <TextAreaBlog
                value={postContent}
                onChange={handlePostChange}
                placeholder="O que você está pensando?"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#1DA1F2', cursor: 'pointer' }}>📷</button>
                    <button style={{ background: 'none', border: 'none', color: '#1DA1F2', cursor: 'pointer' }}>📊</button>
                    <button style={{ background: 'none', border: 'none', color: '#1DA1F2', cursor: 'pointer' }}>😀</button>
                    <button style={{ background: 'none', border: 'none', color: '#1DA1F2', cursor: 'pointer' }}>📍</button>
                </div>
                <button
                    onClick={handlePostSubmit}
                    style={{
                        background: '#1DA1F2',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Postar
                </button>
            </div>
        </div>
    );
};

export default AddPost;
