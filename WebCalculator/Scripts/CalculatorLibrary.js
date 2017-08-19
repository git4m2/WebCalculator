/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    //var txtInput;
    //var txtResult;

    //function initialize() {
    ns.initialize = function() {
        var calculator = new ns.Calculator();

        //for (var i = 0; i < 10; i++) {
        //    document.getElementById('btn' + i).addEventListener('click', numberClick, false);
        //}

        //txtInput = document.getElementById('txtInput');
        //txtResult = document.getElementById('txtResult');

        //document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        //document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        //document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
        //document.getElementById('btnClear').addEventListener('click', clear, false);

        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);

        calculator.clear();
    }

    ns.Calculator = (function () {

        function Calculator() {
        }

        Calculator.prototype.numberClick = function () {
            //txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
            $('#txtInput').val($('#txtInput').val() == '0' ? $(this).text() : $('#txtInput').val() + $(this).text());
        };

        Calculator.prototype.plusClick = function () {
            //txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            //clearEntry();
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.minusClick = function () {
            //txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            //clearEntry();
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.clearEntry = function () {
            //txtInput.value = '0';
            $('#txtInput').val('0');
        };

        Calculator.prototype.clear = function () {
            //txtInput.value = '0';
            //txtResult.value = '0';
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        };

        return Calculator;
    }());
})();
