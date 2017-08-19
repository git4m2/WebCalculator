/// <refererence path="_references.js" />

module('Calculator Test Suite', {
    setup: function () {
        calculatorNamespace.initialize();
    }
});

//test("btn5 click test", function () {
//    expect(1);
//    var btn = document.getElementById('btn5');
//    QUnit.triggerEvent(btn, "click");
//    var result = txtInput.value;
//    var expected = '5';
//    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
//})

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtResult').val());
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        /*
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        //equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result + ' \n' + 'txtInput: ' + txtInput.value);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected string length: ' + expectedLength + ' Actual value: ' + txtInput.value.length);
        */

        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected +
            ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength,
            'Expected string length: ' + expectedLength +
            ' Actual value: ' + $('#txtInput').val().length);
    }
});

test("Add Test", function () {
    /*
    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    */

    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtInput').val());
})

test("Subtract Test", function () {
    /*
    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '10';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    */

    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnMinus').triggerHandler('click');
    var expected = '10';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtIput').val());
});

test("Clear Entry Test", function () {
    /*
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, "Expected value: " + expected + ' Actual value: ' + txtInput.value);
    */

    expect(1);
    $('#txtInput').val('10');
    $('#btnClearEntry').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtInput').val());
});

test("Clear Test", function () {
    /*
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnClear, "click");
    var expected = '0';
    equal(txtInput.value, expected, "Expected value: " + expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, "Expected value: " + expected + ' Actual value: ' + txtResult.value);
    */

    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnClear').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
        ' Actual value: ' + $('#txtResult').val());
});
