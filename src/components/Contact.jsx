import React from "react";

function Contact() {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">Contact Me</h2>
{/*             <p>Gracy@peter.com</p>
            <p>9876543211</p>
            <p>123-Block WIlcYard</p>
            <hr></hr> */}
          </div>

          
          <div className="=col-md-5 d-flex flex-column justify-content-">
            <h4 className="mb-3">Send a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
