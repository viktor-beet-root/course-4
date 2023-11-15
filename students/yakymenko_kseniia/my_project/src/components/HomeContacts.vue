<template>
    <div class="header__container">
        <div class="footer">
            <div class="container footer__container">
                <div class="row footer__row">
                    <div class="col row__col footer__col col-12">
                        <h3 class="footer__title">Contact us</h3>
                        <img
                            class="logo"
                            alt="Vue logo"
                            src="../assets/logo.png"
                        />
                        <br />
                        <span class="footer__title-description"
                            >Visit our social</span
                        >

                        <div class="col col-12 footer-icons">
                            <a
                                class="footer-icons__link"
                                href="https://uk-ua.facebook.com/"
                            >
                                <img
                                    class="footer-icons__icons1"
                                    src="../assets/social/facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a
                                class="footer-icons__link footer-icons-position"
                                href="https://twitter.com/?lang=uk"
                            >
                                <img
                                    class="footer-icons__icons2"
                                    src="../assets/social/twitter.svg"
                                    alt="twitter"
                                />
                            </a>
                            <a
                                class="footer-icons__link footer-icons-position"
                                href="https://www.youtube.com/"
                            >
                                <img
                                    class="footer-icons__icons4"
                                    src="../assets/social/youtube.svg"
                                    alt="youtube"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <style lang="scss" scoped>
.header__container {
    color: azure;
    background-color: brown;
    margin-top: -100px;
    height: 100%;
}
.footer__title {
    font-size: 15px;
}
.footer-icons {
    display: flex;
    justify-content: center;
    padding: 15px;
}

.footer-icons__icons2 {
    margin-right: 20px;
    margin-left: 20px;
}
.logo {
    max-width: 5%;
    opacity: 70%;
    background-color: brown;
}
</style>
