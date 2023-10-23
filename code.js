function permute(array, indexCounter){
	var buffer=-1;
	var x=0;
	for(var i = indexCounter; i < array.length; i++){
		buffer=array[i];
		array[i]=array[indexCounter];
		array[indexCounter]=buffer;
		x=permute(array, indexCounter+1);
		if (x==1){
			return 1;
		}
		buffer=array[indexCounter];
		array[indexCounter]=array[i];
		array[i]=buffer;
        }
	if (indexCounter >= array.length){
		var isSorted=true;
		counter[0]++;
		for (var i = 0; i < array.length-1; i++){
			if (array[i] > array[i+1]){
				isSorted=false;
				break;
			}
		}
		if (isSorted==true){
			return 1;
		}
		else
			return 0;
	}
	else
		return 0;
}

function permutationSort(array){
	if (array==[])
		return [];
	counter[0]=0;
	if (permute(array,0)==1)
		return counter[0];
}
var counter=[0]
