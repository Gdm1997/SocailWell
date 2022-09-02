import { FiSearch } from "react-icons/fi";
import Posts from "../Posts/Posts";
import PostTags from "../PostTags/PostTags";

const BlogSideBar = () => {
  return (
    <aside className="col-md-4" id="blog-side-bar">
      <form>
        <input type="search" placeholder="Search..." />
        <button>
          <FiSearch className="icon" />
        </button>
      </form>
      <Posts title={"recent posts"} />
      <Posts title={"categories"} />
      <PostTags />
    </aside>
  );
};

export default BlogSideBar;
