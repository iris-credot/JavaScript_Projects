var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: false,
        holder: 'IRIS'
        
    },
    {
        title: 'Atomic Habits',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
];
function addBook(title, author){
   const newBook= {
    title,
    author,
    availability: true,
   }
   library.push(newBook);
};
function displayAvailabeBooks(){
    for (let key in library)
     if(library[key].availability === true){
          console.log(library[key]);
     }
};
function borrowBook(title,holder){
for (let key in library){    
    if(library[key].title === title && library[key].availability === true && library[key].holder === ''){
       
        console.log(`${holder} borrowed ${title} Book from the library`);
        library[key].availability = false;
        library[key].holder = holder;
        console.log(library);
    }
    else if(library[key].title === title && library[key].availability !== true && library[key].holder !== ''){
        console.log(`The Book ${title} is not available`);
        console.log(`The available books are :`);
        console.log('');
        for (var i in library){
            if ( library[i].availability === true){
        console.log(library[i].title );
            }
        }
    }
}
};
function returnBook(title,holder){
    for (var i in library){
   if(library[i].title === title && library[i].availability === false && library[i].holder === holder){
    console.log(`${holder} returned ${title}  Book to the library`);
        library[i].availability = true;
        library[i].holder = '';
        console.log(library);
    }
}
};
//addBook('Die Rich','Iris Credot');
//console.log(library);
//borrowBook('Long Eagle','Iris Credot');
returnBook('Long Eagle','IRIS');
//displayAvailabeBooks();
    
   
    




