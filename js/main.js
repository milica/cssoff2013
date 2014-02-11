// on document load
window.onload = function() {

    var map;
    var mapToggle = document.getElementById("map-toggle");
    var mapContainer = document.getElementById('map');
    var beatles = document.getElementById('beatles');
    var mapShow = false;

    /**
     * Toggle map
     */
    mapToggle.addEventListener("click",function(){

        if (mapShow) {
            mapContainer.style.display = 'none';
            mapContainer.innerHTML = '';
            beatles.style.display = 'block';
            removeClassName(mapToggle, 'reverse');
        } else {
            mapContainer.style.display = 'block';
            beatles.style.display = 'none';
            addClassName(mapToggle, 'reverse');
            initialize();
        }
        mapShow = !mapShow;

    },false);

    /**
     * Initialize google map
     */
    function initialize() {

        var position = new google.maps.LatLng(44.821721,20.420588);

        var mapOptions = {
            zoom: 10,
            center: position,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'Here we are!'
        });
    }

    /**
     * Check if element has class
     * @param element
     * @param name
     * @returns {boolean}
     */
    function hasClassName(element, name) {
        return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(element.className);
    }

    /**
     * Add class to the element
     * @param element
     * @param name
     */
    function addClassName(element, name) {
        if (!hasClassName(element, name)) {
            element.className = element.className ? [element.className, name].join(' ') : name;
        }
    }

    /**
     * Remove class from the element
     * @param element
     * @param name
     */
    function removeClassName(element, name) {
        if (hasClassName(element, name)) {
            var c = element.className;
            element.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
        }
    }

};