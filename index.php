<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'includes/head.php'?>
</head>
<body>
    <div class="desktop">
        <div class="container">
            <div class="items"
            data-0="transform: translate(0%, 0%)"
            data-100p="transform: translate(-50%, 0%)"
            data-300p = ""
            data-500p="transform: translate(-100%, 0%)"
            data-900p = ""
            data-1000p="transform: translate(-150%, 0%)"
            data-1100p="transform: translate(-200%, 0%)"
            >
                <div class="boxes" id="first">
                    <div class="mobile-first">
                        <img src="images/mobile-first.png" alt="mobile">
                    </div>

                    <div class="main-information">
                        <h1>Qpal</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, vitae suscipit. Quisquam rerum aspernatur sequi repellat modi corporis. Sed, consequuntur.</p>
                        <div class="wrapper-button">
                            <a href="#" class="btn">
                                <img src="images/google.png" alt="playstore">
                            </a>
                            <a href="#" class="btn">
                                <img src="images/google.png" alt="appstore">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="boxes" id="second">
                    <div class="persons">
                        <img id="image-3" src="images/person3.png" alt="person3">
                        <img id="image-2" src="images/person1.png" alt="person2">
                        <img id="image-1" src="images/person2.png" alt="person1">
                        <img id="image-4" src="images/counter.png" alt="counter">
                        
                    </div>


                    <div class="main-problems">
                        <div class="problem-1">
                            <h2>Problem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente necessitatibus alias eaque fugiat. Provident consequuntur animi praesentium natus, pariatur illo.</p>
                        </div>
                        <div class="problem-2">
                            <h2>Majja ayenani?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente necessitatibus alias eaque fugiat. Provident consequuntur animi praesentium natus, pariatur illo.</p>
                        </div>
                        <div class="problem-3">
                            <h2>Majja aaudo raicha ta?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente necessitatibus alias eaque fugiat. Provident consequuntur animi praesentium natus, pariatur illo.</p>
                        </div>
                    </div>
                </div>
                <div class="boxes" id="third" >
                    <div class="absolute-images">

                        
                        <div class="first-image">
                            <img src="images/jump.png" alt="Jump">
                        </div>

                        <div class="second-image">
                            <img src="images/splash_1.png" alt="mobile">
                        </div>

                        <div class="third-image">
                            <img src="images/signup.png" alt="mobile">
                        </div>
                    </div>

                    <div class="absolute-description">
                        <div class="first-description">
                            <h2>Introducting Qpal</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime nobis totam, consequuntur ut cum obcaecati sunt sapiente corrupti laboriosam.</p>
                        </div>

                        <div class="second-description">
                            <h2>New Definition for Queue</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, odio doloremque. Accusamus earum minus, atque autem est suscipit quam consequuntur.</p>
                        </div>

                        <div class="third-description">
                            <h2>Old Definition for Queue</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, odio doloremque. Accusamus earum minus, atque autem est suscipit quam consequuntur.</p>
                        </div>
                    </div>
                </div>
                <div class="boxes" id="fourth">
                    lll

                </div>
                <div class="boxes" id="fifth">
                    fifth

                </div>
            </div>
        </div>

    </div>

    <!-- start scroller -->
        <script type="text/javascript" src="plugins/skrollr.min.js"></script>
        <script type="text/javascript">
            var s = skrollr.init();
        </script>
 <!-- end scroller -->



 <!-- main js written start -->

    <script src="js/main.js"></script>
 <!-- main js written end -->

</body>
</html>