import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <>
            <h1>Blog</h1>
            <input
                type="text"
                onChange={handleChange}
                className="form-control my-3"
                value={searchParams.get("filter") || ""}
            />
            <ul className="list-group">
                {data
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((post) => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="list-group-item"
                        >
                            {post.id} - {post.title}
                        </Link>
                    ))}
            </ul>
        </>
    );
};

export default Blog;
