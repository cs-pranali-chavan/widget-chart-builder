/* Copyright start
    MIT License
    Copyright (c) 2024 Fortinet Inc
Copyright end */
'use strict';

(function () {
    angular
        .module('cybersponse')
        .factory('highchartBuilderService', highchartBuilderService);

        highchartBuilderService.$inject = ['$http'];

    function highchartBuilderService($http) {
        var service = {
            getLibraries: getLibraries,
            getChartTypes: getChartTypes
        };
        return service;

        function getLibraries() {
            return $http.get('widgets/installed/chartBuilder-1.0.0/assets/chartLibraries.json');
        }

        function getChartTypes() {
            return $http.get('widgets/installed/chartBuilder-1.0.0/assets/chartType.json');
        }
    }
})();