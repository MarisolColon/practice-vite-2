import Row from "react-bootstrap/Row"

import styled from "styled-components"

const StyledAbout = styled.div`
    

    & .carousel-inner {
        position: sticky;
    }
`

const About = () => {
    return (
        <StyledAbout>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2019/08/26/12/32/feather-4431599_1280.jpg" class="h-100 d-inline-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2020/04/19/18/53/portrait-5065016_1280.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg" class="d-block w-100" alt="..." />
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
        </StyledAbout>
    )
}

export default About