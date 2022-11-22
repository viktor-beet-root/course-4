<template>
    <div class="container">
        <div class="row footer">
            <div class="col-3 footer__name">Weather Briefing</div>
            <div class="col-9 footer__wrapper">
                <div class="footer__disclaimer">
                    Disclamer: this is front-end student project, do not use for
                    operations.
                </div>
                <div class="footer__contacts">
                    <a
                        class="footer__link"
                        href="mailto:andrewsamoiliuk@gmail.com"
                        >Contact author</a
                    >
                    <a
                        class="footer__link"
                        href="https://www.checkwxapi.com/"
                        target="blanc"
                        >Aviation Weather API</a
                    >
                    <a
                        class="footer__link"
                        href="https://beetroot.academy/"
                        target="blanc"
                        >Beetroot academy</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    padding: 5px 0;
    align-items: center;

    &__name {
        text-align: center;
        font-weight: 700;
    }
    &__wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    &__disclaimer {
        font-size: 10px;
    }

    &__link {
        color: white;
        text-decoration: none;
        font-size: 10px;
        margin-right: 15px;
    }
}
</style>
