//count the number of students and assign the number to var n
var n = $( ".student-item" ).length;

//create variable for students per page
var spp = 10;

//hide all but 10 students
var $hidden = $(".student-item").slice(spp);
$($hidden).hide();

//calculate number of pagination tabs needed
var numPages = Math.ceil(n/spp);
console.log(numPages);

//function to paginate
var $paginate = function(x) {
	var y = x * spp; 
	var z = y - spp;
	//each time function is called show active slice and hide all other slices
	var $slice = $(".student-item").slice(z,y);
	var $sliceBef = $(".student-item").slice(0,z);
	var $sliceAft = $(".student-item").slice(y,n);
	$slice.show();
	$sliceBef.hide();
	$sliceAft.hide();

}
//append the pagination tabs to index.html
$( '.student-list' ).append( '<div class="pagination"> <ul></ul>' );
var i = 1;
while(i <= numPages){
$( '.pagination ul' ).append( '<li><a class="active" id="'+ i +'" href="#" onclick="$paginate(this.id)">'+ i + '</a></li>');
i++;
}

/*//Adding search functionality is in progress
var array = [];
//append search bar and button to page-header cf
$( '.page-header' ).append( '<div class="student-search"><input id="studentSearchBar" type="text" name="fname"></input><button>Search</button></div>' );

//search function
$( "#studentSearchBar" ).keyup(function() {
  array = [];
  $('.student-item').hide();
  var $searchVal = $(this).val();
  console.log($searchVal);
  var $result = $('.student-item').find($searchVal);
  console.log($result);
  $result.each(array.push($result));
  console.log(array);
});
*/
