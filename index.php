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
            data-100p="transform: translate(0%, -50%)"
            data-200p="transform: translate(-50%, -50%)"
            data-300p="transform: translate(-50%, 0%)"
            data-600p="transform: translate(-50%, 0%)"
            >
                <div class="boxes" id="first">
                    adf
                </div>
                <div class="boxes" id="second">
                    adf
                </div>
                <div class="boxes" id="third" >
                    <div class="box"
                    data-0="opacity:0; transform: translate(0%, 0%)"
                    data-50p="opacity:1; transform: translate(250%, 0%)"
                    data-100p="opacity:1; transform: translate(400%, 0%)"
                 
                    
                    >
                    ff
                    </div>
                </div>
                <div class="boxes" id="fourth">
                    <div    class="text">
                        this will come slowly
                    </div>

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