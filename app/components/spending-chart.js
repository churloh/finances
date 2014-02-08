var SpendingChartComponent = Ember.Component.extend({
    options: {
        legend: 'none'
    },
    onDataChange: function() {
        this.initializeChart();
    }.observes('data'),
    didInsertElement: function() {
        this.chart = new google.visualization.ColumnChart(this.$()[0]);
        this.initializeChart();
    },
    initializeChart: function() {
        this.generateChartDataTable();
        this.applyFormatting();
        this.drawChart();
    },
    generateChartDataTable: function() {
        var data = _.reduce(this.get('data'), function(data, amount, category) {
            data.push([category, amount]);
            return data;
        }, [this.get('columnHeaders')]);
        this.dataTable = google.visualization.arrayToDataTable(data);
    },
    applyFormatting: function() {
        var formatter = new google.visualization.NumberFormat({
            prefix: '$'
        });
        formatter.format(this.dataTable, 1);
    },
    drawChart: function() {
        this.chart.draw(this.dataTable, this.get('options'));
    },
    willDestroyElement: function() {
        if (this.chart) {
            this.chart.clearChart();
        }
    }
});

export default SpendingChartComponent;