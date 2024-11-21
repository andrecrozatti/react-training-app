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
                <h4 style={{ textAlign: "center" }}>Blog App</h4>
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