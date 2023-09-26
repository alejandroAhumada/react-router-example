import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetail = () => {
    const postId = useParams();

    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postId.id}`
    );

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;

    const { id, userId, title, body } = data;

    return (
        <>
            <h1>
                {id} - {title}
            </h1>
            <p>{body}</p>
            <p>{userId}</p>
            <Link to="/blog">Volver</Link>
        </>
    );
};

export default PostDetail;
