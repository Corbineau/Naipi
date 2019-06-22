//the word of the day app pulls a word from the database and checks it against the logs of words already used. It then displays it until a set time, whereupon the check runs again. 

class WordOfDay extends React.Component {
    state = {
      
    };
  render() {
      const {  } = this.state;
      return (
        <div className="Word of the day">
          <WordOfDay  />
        </div>
      );
    }
  }

  handleDateChange = () => {

        var now = new Date();
        var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
        if (millisTill10 < 0) {
            millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
        }
        setTimeout(function(){
            //run a function here to fetch a word from the db, check it against the log of words already used, and pass it to the component.

        }, millisTill10);
  }