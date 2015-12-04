// var FileSelect = React.createClass({

// 	render: function() {
// 		return (
// 			<div className="fileSelect">
// 				<input type="file" />
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	<FileSelect />,
// 	document.getElementById('file-select')
// );

var $container = $('#grid-wrapper').packery({
	columnWidth: 20,
	rowHeight: 20,
});

$container.find('.draggable').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
	// make element draggable with Draggabilly
	var draggie = new Draggabilly( itemElem );
}

$('#file-select').change( function() {
	var img = this.files[0];
    img = window.URL.createObjectURL(img);
    var $obj = $('<div id="uploaded-img-wrapper" class="draggable"><img id="uploaded-img" src="'+ img + '"" /></div>');
    $('#grid-wrapper').append($obj);
	$obj.each(makeEachDraggable);
});

function draggabillyListener(/* parameters */) {
	// get Draggabilly instance
	var draggie = $(this).data('draggabilly');
	console.log( 'eventName happened', draggie.position.x, draggie.position.y );
}

// bind event listener
$draggable.on( 'eventName', listener );

$('#image-position').html()