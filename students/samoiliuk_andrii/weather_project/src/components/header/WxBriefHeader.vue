<template>
    <div class="container">
        <div class="row">
            <div class="col-3 col-sm-4">
                <a href="#" class="header__link">
                    <img
                        src="../../assets/images/logo.svg"
                        alr="logo"
                        class="header__image"
                    />
                </a>
            </div>
            <div class="col-9 col-sm-8">
                <h1 class="header__text">
                    Weather Briefing
                    <span class="header__text_subtext"
                        >Get latest aviation weather reports and forecasts</span
                    >
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
    &__text {
        margin-top: 40px;
        font-weight: 500;
        font-size: 40px;
        line-height: 40px;

        &_subtext {
            display: block;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            margin-top: 10px;
        }
    }
}
</style>
