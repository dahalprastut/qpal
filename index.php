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
            data-600p="transform: translate(-150%, 0%)"
            data-700p="transform: translate(-200%, 0%)"
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
                        <img src="images/person3.png" alt="person3">
                        <img src="images/person1.png" alt="person1">
                        <img src="images/person2.png" alt="person2">
                        <img src="images/counter.png" alt="counter">
                        
                    </div>


                    <div class="main-problems">
                        <h2>Problem</h2>
                        <div class="problem-1">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente necessitatibus alias eaque fugiat. Provident consequuntur animi praesentium natus, pariatur illo.</p>
                        </div>
                    </div>
                </div>
                <div class="boxes" id="third" >
                    adsfcc
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