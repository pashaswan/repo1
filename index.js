$("#convert").click(function() {
	var from = $("#from").val();
	var to = $("#to").val();
	var input = $("#input").val().toString();

	if (from == "bin" && to == "dec") {
		var invalid = false;
		if (input == "") {
			invalid = true;
		} else {
			for (var i = 0; i < input.length; i++) {
				if (input.charAt(i) != '1' && input.charAt(i) != '0') {
					invalid = true;
				}
			}
		}

		if (!invalid) {
			var output = binaryToDecimal(input);
			$("#output").val(output);
			$("#invalid").css("display", "none");
		} else {
			$("#invalid").css("display", "block");
		}
	}
})

function binaryToDecimal(num) {
	return parseInt(num, 2);
}