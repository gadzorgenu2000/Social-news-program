//Link class
class Link{
    constructor(title,author,url){
        let URL = url;
        if(!URL.startsWith('https://') && !URL .startsWith('http://')){

            //adding the http at the beginning of the link
            URL = `https://${URL}`
        }
        //adding data properties
        this.title=title;
        this.author= author;
        this.url = URL;
    }

    //describing the link to a string
    toString(){
        return `${this.title} (${this.url}). Author: ${this.author}`
    }
  
}
  //initial links
  const links =[];
    
  links.push(new Link("Buzz feed", "https://www.buzzfeed.com/", "Buzz"));
  links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
  links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));

  let userChoice;
// Main program loop
// Display options until the user chooses to quit
while (userChoice !== "0") {
  let choices = "\n1 : Show links";
  choices += "\n2 : Add a link";
  choices += "\n3 : Remove a link";
  choices += "\n0 : Quit";
  choice = prompt(`Choose an option: ${choices}`);

  switch(userChoice){
      case "1":{
        if(links.length> 0){
            for(let i =0; i < links.length; i++){
                alert(`${i +1}: ${links[1].toString()}`)
            }
        }else{
            alert('No link to display')
        }
        break;
      }
        case "2":{
            //adding link properties
            const title = this.prompt("Enter the title of the link"); 
            const author = this.prompt("Enter the author of the link ");
            const url = this.prompt("Enter the url of the link") ;
        
            // Add new link to array
            links.push(new Link(title,author,url))
        break;
        }
        case "3":
            if(links.length>0){
        // Input link index (must be between 1 and the number of links)
                let links = -1;
                const MaxIndex = links.length;
                while (index < 1 || index<links.length)
                index = Number(prompt(`Enter the number of the index to be removed (between 1 and ${maxIndex})`));
            }
            //removing links from the array
            // links.splice()
        }

}