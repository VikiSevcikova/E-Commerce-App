import "../scss/ProductCarousel.scss";

const ProductCarousel = ({previewImage, detailImages}) => {
    return(
        <div id="productCarousel" class="carousel slide" data-ride="carousel" data-bs-interval="false">
            <div class="carousel-indicators">
                <a type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0">
                    <img src={previewImage} class="d-block w-100" alt="preview"/>
                </a>
                {detailImages.map((img, i)=>
                    <a key={`btn-${img.id}`} type="button" data-bs-target="#productCarousel" data-bs-slide-to={i+1} aria-label={`Slide ${i+1}`}>
                        <img src={img.imgUrl} class="d-block w-100" alt={img.description}/>
                    </a>
                )}
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={previewImage} class="d-block w-100" alt="preview"/>
                </div>
                {detailImages.map((i)=>
                    <div key={`item-${i.id}`} class="carousel-item">
                        <img src={i.imgUrl} class="d-block w-100" alt={i.description}/>
                    </div>
                )}
                 <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    )
}

export default ProductCarousel;