
var executeTimes=[];
var array_length;


//when you press the button '+'
function addRow() 
{
  //getting entire last row
  var lastRow = $('#inputTable tr:last');
  //getting the text of the process number from the last row
  var lastRowNum = parseInt(lastRow.children()[0].innerText);

  //defining a new row and contents of columns
  var newRow = '<tr class="warning"><td>'
  + (lastRowNum + 1)
  + '</td><td>'
  + (0)
  + '</td><td><input class="exectime" type="text"/></td>'
  + '<td><input type="text"></td></tr>';

  //adding the new row after the last row
  lastRow.after(newRow);
}


//when you press the button '-'
function deleteRow() 
{
  var lastRow = $('#inputTable tr:last');
  lastRow.remove();
}

//heapify until max array is created
function heapify(input, i) {
    //defining index of left child
    var left = 2 * i + 1;
    //defining index of right child
    var right = 2 * i + 2;

    var max = i;

    //checking if left leaf node is greater to the max value- if yes then set max= left
    if (left < array_length && input[left] > input[max]) {
        max = left;
    }
    //checking if right leaf node is greater to the max value- if yes then set max= right
    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    //if max changes in value i.e if left or right is greater than max
    //then swap the structure and the priority
    //and then re-heapify them to check again
    if (max != i) {
        swap(executeTimes, i, max);
        swap(input, i, max);
        heapify(input, max);
    }
}

//simple swapping by passing the index of the elements to be swapped
function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}


//heapsort with build heap
function heapSort(input) {
    //definig the array length
    array_length = input.length;
  
    //build heap function
    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      
      {
        heapify(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(executeTimes, 0, i);
        swap(input, 0, i);
        array_length--;
      
      
        heapify(input, 0);
    }
}


//main function 
function main_prio_sort() {
  var inputTable = $('#inputTable tr');
  var totalExectuteTime = 0;
  var burst_time = [];
  var priorities = [];
  var ord=[]

  //key=Row number
  //value= entire Row
  //key-1 as table header is treated as key=0
  $.each(inputTable, function (key, value) 
  {
  
    if (key == 0) 
      return true;

    burst_time[key - 1] = parseInt($(value.children[2]).children().first().val());
    priorities[key - 1] = parseInt($(value.children[3]).children().first().val());
    //making a object to replicate structure in c
    executeTimes[key - 1] = { "executeTime": burst_time[key-1], "P": key - 1,"priority":priorities[key - 1] };

  });

  //calling heap sort to sort on basis of priorities
  heapSort(priorities);

  //condition if priorities are same

  //normal bubble sort if priorities are same
  //on basis of arrival time
  for(var i=0;i<executeTimes.length-1;i++)
  {
    for (var j=i+1;j<executeTimes.length;j++)
    {
      if(executeTimes[i].priority==executeTimes[j].priority)
      {
        if(executeTimes[i].executeTime==executeTimes[j].executeTime)
        {
          if(executeTimes[i].P>executeTimes[j].P)
          {
            var temp=executeTimes[i];
            executeTimes[i]=executeTimes[j];
            executeTimes[j]=temp;
          }
        }
        else if(executeTimes[i].executeTime>executeTimes[j].executeTime)
        {
          var temp=executeTimes[i];
          executeTimes[i]=executeTimes[j];
          executeTimes[j]=temp;
        }
        
      }

    }
  }

  //calling draw to print output table
  draw(executeTimes);

}




//animate the table--curtain effect
function animate() {
	$('fresh').prepend('<div id="curtain" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
  
  $('#curtain').width($('#resultTable').width()+40);
  $('#curtain').css({left: $('#resultTable').position().left});
  
  var sum = 0;
  $('.exectime').each(function() {
      sum += Number($(this).val());

  });
  
  var distance = $("#curtain").css("width");
  
  animationStep(sum, 0);
  jQuery('#curtain').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}

function animationStep(steps, cur) {
	$('#timer').html(cur);
	if(cur < steps) {
		setTimeout(function(){ 
   	     animationStep(steps, cur + 1);
  	}, 480);
  }
  else {
  }
}


//result table printing
function draw(input) {
  $('fresh').html('');
  var inputTable = $('#inputTable tr');
  var th = '';
  var td = '';

  
  var executeTimes1 = [];
  executeTimes1=input;

    $.each(executeTimes1, function (key, value) {

      th += '<th style="height: 60px; width: ' + value.executeTime * 20 + 'px;">P' + value.P + '</th>';
      td += '<td>' + value.executeTime + '</td>';
    });

    $('fresh').html('<table id="resultTable" class="table table-bordered box-shadow--6dp" style="width: 70%"><tr>'
                    + th
                    + '</tr><tr>'
                    + td
                    + '</tr></table>'
                   );
  
  animate();
}