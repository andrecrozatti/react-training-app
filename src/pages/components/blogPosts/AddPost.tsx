import React, { useState } from 'react';
import { TextAreaBlog } from '../custom/TextAreaBlog';
import { useTheme } from '../../../context/ThemeContext';

const AddPost: React.FC = () => {
    const [postContent, setPostContent] = useState<string>('');

    const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    };


    // Implementar a função handlePostSubmit para enviar o post ao clicar no botão "Postar"
    // A função deve mostrar uma alerta com o conteúdo do post enviado e limpar o campo de entrada.
    const handlePostSubmit = () => {
        if (postContent.trim()) {
            alert(`Post enviado: ${postContent}`);

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'Title 1',
                    body: postContent,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => alert(err));
            

            setPostContent('');
        } else {
            alert('O post não pode estar vazio.');
        }
    };

    const {theme} = useTheme()
    return (
        <div className={`border-section-${theme}`} style={{ margin: '0 auto', padding: '20px' }}>

            <TextAreaBlog
                value={postContent}
                onChange={handlePostChange}
                placeholder="O que você está pensando?"
            />

            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>📷</button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>📊</button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>😀</button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>📍</button>
                </div>
                <button
                    onClick={handlePostSubmit}
                    style={{
                        
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        
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
