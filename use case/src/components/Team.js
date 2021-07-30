import React from 'react'

export default function Team() {
    return (
        <div>
             <div>
        <title>Contact us</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    body{\n        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(234 , 249,251,0.63) 0.1%, rgba(239,249,251,0.63) 90.1%);\n    }\n" }} />
        <div className="container">
          <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-5">Contact Us</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.</p>
            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form id="contactform">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input type="text" name="name" className="form-control" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input type="text" name="email" className="form-control" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input type="text" name="subject" className="form-control" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea type="text" name="message" rows={3} className="form-control md-textarea" defaultValue={""} />
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <button className="btn btn-primary" type="submit">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 text-center text-primary">
                <ul className="list-unstyled mb-0">
                  <li><i className="fas fa-map-marker-alt fa-2x" />
                    <p className="text-dark">Karachi , Ku 3845, PK</p></li>
                  <li><i className="fas fa-phone mt-4 fa-2x" />
                    <p className="text-dark">+ 935 3434 53 535</p></li>
                  <li><i className="fas fa-envelope mt-4 fa-2x" />
                    <p className="text-dark">theproviders98@gmail.com</p></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* JQuery */}
        {/* Bootstrap tooltips */}
        {/* Bootstrap core JavaScript */}
        {/* MDB core JavaScript */}
      </div>
    );
              
            
        </div>
    )
}
