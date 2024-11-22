import { useTheme } from "../../context/ThemeContext";
import ListBlogPosts from "../components/blogPosts/ListBlogPosts";
import Menu from "../components/menu/Menu";
import ThemeToggler from "../components/themeToggler/ThemeToggler";
import SearchBar from "../components/trending/SearchBar";
import TrendingSidebar from "../components/trending/TrendingSideBar";



const Home: React.FC<any> = () => {

    const {theme} = useTheme()
    return (
        <div className="container-blog">
            <header className="header-blog">
                <img src="/vite.svg" />
                <Menu />
            </header>
            <main className={`main-blog border-section-${theme}`}>
                <h4 style={{ textAlign: "center" }}>Blog App</h4>
                <ThemeToggler/>
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