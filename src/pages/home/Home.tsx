import ListBlogPosts from "../components/blogPosts/ListBlogPosts";
import Menu from "../components/menu/Menu";
import SearchBar from "../components/trending/SearchBar";
import TrendingSidebar from "../components/trending/TrendingSideBar";



const Home: React.FC<any> = () => {

    return (
        <div className="container-blog">
            <header className="header-blog">
                <img src="/vite.svg" />
                <Menu />
            </header>
            <main className="main-blog border-section">
                <h2 style={{ textAlign: "center" }}>Blog App</h2>
                <ListBlogPosts />
            </main>
            <aside className="features-blog">
                <SearchBar />
                <TrendingSidebar /> 
            </aside>
        </div>

    )
}


export default Home;