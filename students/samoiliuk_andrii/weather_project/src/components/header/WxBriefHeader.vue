<template>
    <header class="header">
        <div class="header__imageContainer">
            <a href="#" class="header__link">
                <img
                    src="../../assets/images/plane-icon.svg"
                    alr="logo"
                    class="header__image"
                />
            </a>
        </div>
        <div class="header__name">
            <h1 class="header__text">
                Weather Briefing<br />
                <span class="header__text_subtext"
                    >Get latest aviation weather reports and forecasts</span
                >
            </h1>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;

    &__image {
        margin: 0 50px;
    }

    &__link {
        box-sizing: border-box;
        padding: 0 15px;
        width: 200px;
        display: block;
    }

    // .header__name

    &__name {
        padding: 0 15px;
    }

    // .header__text

    &__text {
        font-weight: 700;
        font-size: 20px;

        &_subtext {
            font-size: 16px;
            font-weight: 400;
        }
    }
}
</style>
