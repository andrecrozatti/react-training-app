import ListBlogPosts from "../components/blogPosts/ListBlogPosts";



const Home: React.FC<any> = () => {

    return (
        <div className="container-blog">

            <header className="header-blog">
                <img src="/vite.svg" />
            </header>
            <main className="main-blog">
                <h2 style={{ textAlign: "center" }}>Blog App</h2>
                <ListBlogPosts />
            </main>
            <aside className="features-blog">
                <div>
                    <h2>Vite</h2>
                </div>
            </aside>
        </div>

    )
}


export default Home;