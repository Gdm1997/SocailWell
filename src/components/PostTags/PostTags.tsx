const PostTags = () => {
  return (
    <div id="post-tags">
      <span className="title">tags</span>

      <ul>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <li>
            <a href="/">Lorem</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostTags;
