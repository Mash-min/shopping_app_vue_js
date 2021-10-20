<template>
  
    <div class="container mb-5">
        <div class="row">
            <div class="col-lg-3 col-md-3 d-none d-lg-block d-xxl-block p-1">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">Product Category 1</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 2</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 3</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 4</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 5</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 6</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 7</a>
                    <a href="#" class="list-group-item list-group-item-action">Product Category 8</a>
                </div>
            </div>
            <div class="col-lg-9 col-md-12 p-1">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../assets/images/cover-1.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/cover-1.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/cover-1.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Cover'
  }
</script>