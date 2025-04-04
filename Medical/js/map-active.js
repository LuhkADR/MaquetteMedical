$(document).ready(function(){
/*====================================
	Google Map JS
======================================*/ 	
(function(){

    var map;
    map = new GMaps({
        el: '#myMap', // Utilisation de l'ID #myMap
        lat: -19.8500,    // Latitude approximative du centre d'Antsirabe
        lng: 47.0500,     // Longitude approximative du centre d'Antsirabe
        scrollwheel:false,
        zoom: 13,         // Ajuster le niveau de zoom selon le besoin
        zoomControl : true,
        panControl : true,
        streetViewControl : false,
        mapTypeControl: true,
        overviewMapControl: false,
        clickable: true   // Permettre l'interaction avec les marqueurs
    });

    // Liste des centres médicaux avec leurs coordonnées et noms
    var medicalCenters = [
        {
            lat: -19.8450,
            lng: 47.0380,
            title: 'Centre Médical Évangélique Maranata',
            details: 'Informations supplémentaires sur le centre Maranata...' // Ajouter des détails si nécessaire
        },
        {
            lat: -19.8480,
            lng: 47.0400,
            title: 'Santé Plus',
            details: 'Informations supplémentaires sur Santé Plus...'
        },
        {
            lat: -19.8320,
            lng: 47.0550,
            title: 'Service de District de Santé Publique Antsirabe',
            details: 'Informations supplémentaires sur le Service de District...'
        },
        {
            lat: -19.8750,
            lng: 47.0650,
            title: 'Centre médical FANDRESENA',
            details: 'Informations supplémentaires sur le centre FANDRESENA...'
        },
        {
            lat: -19.8390,
            lng: 47.0450,
            title: 'Cabinet Médical Kiady',
            details: 'Informations supplémentaires sur le Cabinet Kiady...'
        },
        // Vous pouvez ajouter d'autres centres médicaux ici
    ];

    // Icône de marqueur personnalisée (facultatif)
    var medicalIcon = 'img/medical-marker.png'; // Créez votre propre icône médicale

    // Ajouter les marqueurs pour chaque centre médical
    medicalCenters.forEach(function(center) {
        map.addMarker({
            lat: center.lat,
            lng: center.lng,
            title: center.title,
            icon: medicalIcon, // Utiliser l'icône personnalisée (facultatif)
            animation: google.maps.Animation.DROP,
            infoWindow: {
                content: '<h3>' + center.title + '</h3>' + (center.details ? '<p>' + center.details + '</p>' : '')
            }
        });
    });

    // Style de carte personnalisé (facultatif)
    var styles = [
        {
            "featureType": "poi.medical",
            "stylers": [
                { "visibility": "on" },
                { "color": "#fce5e8" } // Couleur pour les lieux médicaux
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                { "color": "#ffffff" }
            ]
        },{
            "featureType": "water",
            "stylers": [
                { "color": "#aee4ff" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
                { "color": "#f2f2f2" }
            ]
        }
        // Vous pouvez ajouter d'autres styles ici
    ];

    map.addStyle({
        styledMapName:"Centres Médicaux Antsirabe",
        styles: styles,
        mapTypeId: "medical_style"
    });

    map.setStyle("medical_style");

}());

});