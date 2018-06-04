export const handleSortGeneral = (classes, sortBy, isReversed, sorter)=>{
	let sortedClasses = [...classes];
	sortedClasses.sort((a, b) => isReversed
		?  sorter(a[sortBy], b[sortBy])
		:  - sorter(a[sortBy], b[sortBy])
	);
	return sortedClasses;
};

export const dateSorter =  (a,b)=> (new Date(a).getTime() - new Date(b).getTime());
export  const numberSorter = (a,b)=> a - b;
export  const alphaNumSorter = (a,b)=> {
	if(a > b) {
		return 1;
	}
	if(a < b) {
		return -1;
	}
	return 0;
};

export const handleDate = (classes, sortBy,isReversed) => handleSortGeneral(classes, sortBy,isReversed, dateSorter);
export const handleNumber = (classes,sortBy,isReversed) => handleSortGeneral(classes,sortBy,isReversed,numberSorter);
export const handleAlpha = (classes,sortBy,isReversed) => handleSortGeneral(classes,sortBy,isReversed,alphaNumSorter);
