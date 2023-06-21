// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

// Array of predefined poster objects
const posters = [
    {
      image: 'https://www.jiagew939.com/png/mid-week-motivation.png',
      title: 'Wait Until Friday',
      quote: 'Stay motivated or try to live until Friday night and you might see something nice.',
    },
    {
      image: 'https://img.freepik.com/free-vector/flat-autumn-background_23-2149029836.jpg',
      title: 'Fall Image',
      quote: 'Fall is nice...? I guess?',
    },
    {
      image: 'https://cdn.dribbble.com/users/3957728/screenshots/7012828/kopi.jpg',
      title: 'Get a Coffee',
      quote: 'If you having difficulty of staying awake, try a cup of coffee',
    },
  ];

  var currentPoster = 0;
  
  $(document).ready(function(){
    // Event listener for randomize button
    $("#randomize").on("click",generateRandomPoster);

    // Event listener for submit button
    $("#submit").on("click",generateCustomPoster);
    });

  


  
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let randomIndex = Math.floor(Math.random() * posters.length);
    while (currentPoster === randomIndex) 
    {
        randomIndex = Math.floor(Math.random() * posters.length);
    }
    currentPoster = randomIndex;
  
    // TODO: Retrieve the random poster object from the posters array
    let poster = posters[randomIndex];
  
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(poster['image'], poster['title'], poster['quote']);
  }
  

  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();  
    // TODO: Retrieve the entered quote and author from the input fields
    $(document).ready(function(){
        var imageUrl = $('#poster-form-image').val();
        var quote = $('#poster-form-quote').val();
        var title =  $('#poster-form-title').val();

        if (imageUrl==="" || quote===""  || title==="" )
        {
            alert("Please make sure you have filled out all field");
        }
        else
        {
            // TODO: Create a custom poster object with the entered values
            posters.push({
                'image': imageUrl,
                'quote': quote,
                'title': title
            });
    
            // TODO: Call the function to update the DOM with the values from the custom poster object
            currentPoster = posters.length - 1;
            updatePoster(imageUrl, title, quote);
        }

    });
    
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    $(document).ready(function(){
        $('#poster-title').text(title);
        $('#poster-quote').text(quote);
        $('#poster-image').attr("src", imageUrl);
    });
  }
