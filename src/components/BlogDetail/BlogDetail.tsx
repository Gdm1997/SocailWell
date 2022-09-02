import { Avatar, Play, Video } from "../../assets/images";
import { BsChat } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const BlogDetail = () => {
  return (
    <div className="col-md-8" id="blog-detail">
      <div className="video-wrapper">
        <img src={Video} alt="video" className="video-player" />
        <img src={Play} className="play-icon" alt="playbtn" />
        <div className="date-log">
          <span className="date">13</span>
          <span className="month">jan</span>
        </div>
      </div>
      <div className="blog-view-section">
        <span className="views">100 views</span>
        <span className="read">3 min read</span>
      </div>
      <div className="blog-title">
        <span className="category">BLOG CATAGORY MAIN</span>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </h2>
      </div>
      <div className="blog-author">
        <img src={Avatar} alt="author" />
        <span className="name">lorem ipsum</span>
      </div>
      <div className="blog-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          blanditiis recusandae, cum accusantium illo aut exercitationem quasi
          aspernatur nemo ullam error ea distinctio. Sint odit, consequuntur
          accusantium, rem laudantium aut beatae repudiandae asperiores
          voluptate perferendis blanditiis excepturi natus consequatur officiis
          ut rerum deserunt praesentium dolorum voluptatibus ex? A vitae
          suscipit numquam sequi, maxime dolore vel dignissimos provident,
          repellendus facere nisi officia autem corrupti! Assumenda, libero
          dignissimos nesciunt similique atque alias accusamus minus saepe in
          doloribus veniam quidem laborum fuga aut inventore labore voluptatem?
          Nulla, eum laboriosam. Obcaecati nam minus numquam architecto ad
          dolore amet error, mollitia voluptate minima aperiam inventore
          veritatis aliquam qui nulla sequi corporis placeat expedita in
          deserunt laudantium dolor. Odit similique illum cumque quisquam. Odio
          perspiciatis quaerat esse voluptatibus numquam! Laudantium nulla,
          consequuntur dolor vero dolore consequatur quod. Omnis hic quaerat
          dolor delectus eos architecto, cupiditate qui voluptatum enim odit
          voluptas nihil velit distinctio alias. Eligendi, laborum!
        </p>

        <span>lorem ipsum</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          blanditiis recusandae, cum accusantium illo aut exercitationem quasi
          aspernatur nemo ullam error ea distinctio. Sint odit, consequuntur
          accusantium, rem laudantium aut beatae repudiandae asperiores
          voluptate perferendis blanditiis excepturi natus consequatur officiis
          ut rerum deserunt praesentium dolorum voluptatibus ex? A vitae
          suscipit numquam sequi, maxime dolore vel dignissimos provident,
          repellendus facere nisi officia autem corrupti! Assumenda, libero
          dignissimos nesciunt similique atque alias accusamus minus saepe in
          doloribus veniam quidem laborum fuga aut inventore labore voluptatem?
          Nulla, eum laboriosam. Obcaecati nam minus numquam architecto ad
          dolore amet error, mollitia voluptate minima aperiam inventore
          veritatis aliquam qui nulla sequi corporis placeat expedita in
          deserunt laudantium dolor. Odit similique illum cumque quisquam. Odio
          perspiciatis quaerat esse voluptatibus numquam! Laudantium nulla,
          consequuntur dolor vero dolore consequatur quod. Omnis hic quaerat
          dolor delectus eos architecto, cupiditate qui voluptatum enim odit
          voluptas nihil velit distinctio alias. Eligendi, laborum!
        </p>
      </div>
      <div className="comment-count">
        <div className="item">
          <BsChat className="icons" />0 comments
        </div>
        <div className="item">
          <BiLike className="icons" />
          likes
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
