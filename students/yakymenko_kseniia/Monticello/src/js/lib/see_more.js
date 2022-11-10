import $ from 'jquery';

function seeMore() {
    const htmlGalleryPhotos = `
<div class="container append">
    <div class="row append__row append__row_adaptive id="seeMoreP">

    <div class="col-3 col-md-6 img-list__image-wrapper img-list__image-wrapper_left">
    <a class="img-list__image-url" href="../images/gallery2.png" data-lightbox="lbox" data-name="Gallery 2">
    <img class="img-list__img" src="../images/gallery2.png" alt="gallery">
</a>
<a class="img-list__image-url" href="../images/gallery3.png" data-lightbox="lbox"
    data-title="Gallery 3">
    <img class="img-list__img" src="../images/gallery3.png" alt="gallery">
</a>
</div>
<div class="col-3 col-md-6 img-list__image-wrapper img-list__image-wrapper_right">
<a class="img-list__image-url" href="../images/gallery4.png" data-lightbox="lbox"
    data-title="Gallery 4">
    <img class="img-list__img" src="../images/gallery4.png" alt="gallery">
</a>
<a class="img-list__image-url" href="../images/news5.jpg" data-lightbox="lbox" data-title="Gallery 5">
    <img class="img-list__img" src="../images/news5.jpg" alt="gallery">
</a>
</div>
</div>
</div>
`

    $(document).ready(function () {
        let $seeMore = $('#seeMore');
        setTimeout(function () {
            $seeMore.on("click", function () {
                $('#morePhotos').before(htmlGalleryPhotos);
            });
        }, 0);
    });

};

export default seeMore;
