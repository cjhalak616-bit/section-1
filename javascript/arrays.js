/*const arr=['hello',27,false,null];

console.log(Array.isArray(arr));*/

const movies=['Tere naam','Don','biwi no.1','dhurandhar','Baazigar','chaava'];

//indexing
console.log(movies[3]);
console.log(movies.indexOf('Don'));
console.log(movies.at(-2));

movies[2]='Batman';

console.log(movies);

//slicing
console.log(movies.slice(1,4));
console.log(movies.slice(-3,-1));
console.log(movies.slice(-3));
console.log(movies.slice(-3,50));

//adding and removing elements in array

movies.push('Jungle');//adds elements at the end of array
movies.unshift('Flash');//adds elements at start of array
console.log(movies)

movies.pop();//removes last element
movies.shift();//removes first element
console.log(movies);

//removing elements
 // movies.splice(2,2);//removing elements
  //movies.splice(2,2,'superman','Aquaman');
  movies.splice(2,0,'Superman');
console.log(movies);