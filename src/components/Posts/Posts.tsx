const Posts: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div id="posts">
      <span className="title">{title}</span>

      <ul>
        {[1, 2, 3, 4].map((_, index) => (
          <li>
            <a href="/">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem magnam rerum? Dolorem, quas possimus!
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
