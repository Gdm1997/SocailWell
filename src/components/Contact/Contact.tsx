const Contact = () => {
  return (
    <div id="contact-form" className="col-md-8">
      <div className="title">post a comment</div>
      <form className="row">
        <div className="col-md-6">
          <input type="text" className="form-input" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-input" placeholder="Your Email" />
        </div>
        <div className="col-md-12 checkbox">
          <input type="checkbox" id="save-details" />
          <label htmlFor="save-details">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <div className="col-md-12">
          <textarea placeholder="Your Comments" rows={5}></textarea>
        </div>
        <div className="col-md-12">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
