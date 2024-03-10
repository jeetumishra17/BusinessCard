const CardProducts = () => {
    const toggleItems = (e) => {
        const items = document.querySelector('.card-prod-items');
        items.classList.toggle('show');
        e.target.closest('.card-prod').querySelector('.card-prod-title .fa-chevron-down').classList.toggle('rotate');
    }
    
    return(
    <div className="card-prod">
        <div className="card-prod-title" onClick={toggleItems}>
            <h2>Products</h2>
            <p>Our Products and Services</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="card-prod-items">
            <div className="card-prod-item">
                {/* <h3 align="center">Fine Products</h3> */}
                <p>CCTV Camera installation/ service</p>
                <p>Hardware Networking</p>
                <p>BSNL Wi-Fi </p>
                <p>RAILTEL Wi-Fi</p>
                
            
            </div>
            
        </div>
    </div>
    );
};

export default CardProducts;