const CardContact = () => {
    return (
      <div className="card-contact-us">
        <div className="card-contact-title">
            <i class="fa-solid fa-mobile-screen"></i>
            <h2>Contact Details</h2>
        </div>
        <div className="contact-details-item">
            <h3>Mobile No.</h3>
            <p><a href={`tel:+919198313017`} target="_blank" rel="noreferrer">+919198313017</a></p>
        </div>
        <div className="contact-details-item">
            <h3>Email ID</h3>
            <p><a href="mailto:shreyahitechsolution@gmail.com" target="_blank" rel="noreferrer">shreyahitechsolution@gmail.com</a></p>
        </div>
        <div className="contact-details-item">
            <h3>Factory Address</h3>
            <p><a href="https://maps.app.goo.gl/Le6ycfesnniM98yY7" target="_blank" rel="noreferrer">A-10, Industrial Area Phase-II<br />Sandila, Distt-Hardoi, 241127, U.P.</a></p><br />
            
        </div>
      </div>
    );
}
  
export default CardContact;