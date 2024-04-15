import Row from "react-bootstrap/Row"

const About = () => {
    return (

            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2016/10/17/17/11/sea-bridge-1748162_1280.jpg" class="h-100 d-inline-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2019/07/21/13/42/nature-conservation-4352793_1280.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
     
    )
}

export default About
